/**
 * Module dependencies.
 */

var express = require('./node_modules/express');
var routes = require('./routes');

var widgets = require('./routes/widgets');

var http = require('http');
var path = require('path');


var app = express();
var server = module.exports = http.createServer(app);
module.exports.use = function () {
    app.use.apply(app, arguments);
};
module.exports.set = function () {
    app.set.apply(app, arguments);
};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
/**
 * Allow CORS to work for every request.
 * http://stackoverflow.com/a/13148080/135786
 */
app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    // if we don't have this, no other headers will show.
    res.header('Access-Control-Expose-Headers', 'Content-Type, Location');
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);

// Code changes should be below this line. Only new routes should be added. 

/**
 * This route is for widgets tests
 */
widgets(app);


server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
