'use strict'
var carModel = require('../models/cars');

var getCars = (req,res,next) =>{
    res.json(carModel.getCars());
}

var getById = (req,res, next) => {
    var id = req.params.id;
    res.json(carModel.getById(id));
}

module.exports = {
    getCars : getCars,
    getById : getById
}