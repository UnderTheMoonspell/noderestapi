'use strict'
var express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    //mongoose = require('mongoose'),
    config = require('./config'),
    mainroute = require('./routes/index'),
    accountController = require('./controllers/account');

//mongoose.connect(config.database);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));

//////////////////////ROUTES
app.use('/api',mainroute);

//////////////////////ERROR HANDLERS

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler

if (app.get('env') === 'development') {   
    app.use(function(err, req, res, next) {
        console.log(err);
        var errorType = typeof err,
            code = 500,
            msg = { message: "Internal Server Error" };
        
        switch (err.name) {
            case "UnauthorizedError":
                code = err.status;
                msg = undefined;
                break;
            case "BadRequestError":
            case "UnauthorizedAccessError":
            case "NotFoundError":
                code = err.status;
                msg = err.inner;
                break;
            default:
                break;
        }

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;