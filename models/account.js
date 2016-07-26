var jwt = require('jsonwebtoken'),
    config = require('../config');

var authenticate = (user, password) => {
    if (!user) {
        return { success: false, message: 'Authentication failed. User not found.' };
    } else if (user.password != password) {
        return { success: false, message: 'Authentication failed. Wrong Password' };
    } else {
        var token = jwt.sign(user, config.secret, {
            expiresIn: 60*60*24
        });
        return { success: true, message: 'Enjoy your token!', token: token };
    }
}

module.exports = {
    authenticate: authenticate
}