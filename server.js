const express       = require("express");
const compression   = require("compression");
const bodyParser    = require("body-parser");
const morgan        = require("morgan");
const config        = require("./config");
const passport      = require("./passport")

const log           = require('debug')('api:server');
const error         = require('debug')('api:error');

const router        = require('./routes');
const auth          = require("./passport");

const apiServer = express();
/*
Global Middleware
*/
apiServer.use(compression());
apiServer.use(morgan('dev'));
apiServer.use(bodyParser.urlencoded({extended : true}));
apiServer.use(bodyParser.json());
/*
Passport initialization
*/
auth.initPassport(apiServer)
/*
API router
*/
apiServer.use('/auth', auth.router);
apiServer.use('/', router);
/*
Global error handling
*/
apiServer.use((err, req, res, next) => {
    error((err.status || 500) + " " + error.message)
    // Handle error?
    res.status(err.status || 500).json({ error: err.message, trace: err.stack })
})

module.exports = apiServer