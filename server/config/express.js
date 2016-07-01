var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    config = require('./config'),
    cors = require('cors'),
    mysql = require('mysql');

//var uri = 'mongodb://localhost/mean';
//var db = require('mongoose').connect(uri);

module.exports = function(){
    var app = express();
    
    if (process.env.NODE_ENV === 'development')
    {
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production')
    {
        app.use(compress());
    }
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());
    
    app.use(methodOverride());
    
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    
    app.use(cors({credentials: true, origin: true}));
    
    app.set('views', './views');
    app.set('view engine', 'ejs');

    require('../routes/index.server.routes')(app);
    require('../routes/users.server.routes.js')(app);
    require('../routes/playerrecord.server.routes.js')(app);
    
    app.use(express.static('./public'));
    
    return app;
};


