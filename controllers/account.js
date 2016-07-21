var users = require('../controllers/users')
    jwt = require('jsonwebtoken');

var authenticate = (req, res) => {
    var user = users.getByName(req, res);
    debugger;
    if(!user){
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else{
        if(user.password != req.body.password){
            res.json({ success: false, message: 'Authentication failed. Wrong Password' });
        } else{
            var token = jwt.sign(user, app.get('secret'), {
                expiresInMinutes:1440
            });

            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        }
    }
}

module.exports = {
    authenticate: authenticate
}