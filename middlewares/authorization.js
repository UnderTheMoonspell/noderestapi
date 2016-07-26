'use strict'
var userModel = require('../models/users'),
    jwt = require('jsonwebtoken'),
    config = require('../config');

var tokenVerification = (req, res, next) => {
    //var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var token = null;
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization;
        var part = authorization.split(' ');
        if (part.length === 2) {
            var token = part[1];
        }        
    }

    if(token){
        jwt.verify(token, config.secret, function(err, decoded){
            if(err){
                return res.json({success: false, message: 'Failed to authenticate token.'})
            } else{
                req.decoded = decoded;
                next();
            }
        })
    } else{
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
}

var requireRole = (roles) => {
    return function(req, res, next) {
        var userRole = req && req.headers['x-user-role'] ? req.headers['x-user-role'].toLowerCase() : '',
            userAcceptedRoles;
        if(roles instanceof Array)
        {
            userAcceptedRoles = roles.filter((roles) => {
                return roles.toLowerCase() === userRole;
            });          
        }
        else if(roles.toLowerCase() === userRole){
            userAcceptedRoles = userRole;
        }
        
        if(!userAcceptedRoles || userAcceptedRoles.length == 0){
            res.sendStatus(403);
        } else{
            next();            
        }
    }
}

module.exports = {
    tokenVerification: tokenVerification,
    requireRole: requireRole
}