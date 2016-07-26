var userModel = require('../models/users'),
    jwt = require('jsonwebtoken'),
    config = require('../config');

var authenticate = (req, res) => {
    try{
        var username = req.body.username,
            password = req.body.password,
            user = userModel.getByName(username);
        // res.json(accountModel.authenticate(user, password));
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.' });
        } else if (user.password != password) {
            res.json({success: false, message: 'Authentication failed. Wrong Password' });
        } else {
            var token = jwt.sign(user, config.secret, {
                expiresIn: 60*60*24
            });
            res.json({success: true, message: 'Enjoy your token!', token: token });
        }
    }
    catch(ex){
        console.trace(ex);
    }
}

module.exports = {
    authenticate: authenticate
}