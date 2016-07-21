var express = require('express'),
    app = express(),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    //mongoose = require('mongoose'),
    config = require('./config'),
    mainroute = require('./routes/index'),
    carsroute = require('./routes/cars'),
    usersroute = require('./routes/users'),
    accountroute = require('./routes/account');

//mongoose.connect(config.database);
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));

// ROUTES
app.use('/api',mainroute);
// app.use('/api',carsroute);
// app.use('/api',usersroute);
// app.use('/api',accountroute);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;