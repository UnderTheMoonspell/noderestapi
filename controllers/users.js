'use strict'
var userModel = require('../models/users');

var getUsers = (req,res,next) => {
    res.json(userModel.getUsers());
}

var getById = (req,res, next) => {
    var id = req.params.id;
    res.json(userModel.getById(id));
}

var getByName = (req,res, next) => {
    var name = req.params.username;
    res.json(userModel.getByName(name));
}

module.exports = {
    getUsers : getUsers,
    getById : getById,
    getByName : getByName
}