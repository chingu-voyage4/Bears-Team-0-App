const express       = require("express");
const compression   = require("compression");
const passport      = require("passport");
const bodyParser    = require("body-parser");
const morgan        = require("morgan");
const config        = require("./config");

const log   = require('debug')('api:server');
const error = require('debug')('api:error');

const routes = require('./routes');
const authRouter = require("./routes/oauth");

const apiServer = express();
/*
Global Middleware
*/
apiServer.use(compression());
apiServer.use(morgan('dev'));
apiServer.use(bodyParser.urlencoded({extended : true}));
apiServer.use(bodyParser.json());

apiServer.use(passport.initialize());
// apiServer.use(passport.session());
/*
API router
*/
apiServer.use('/api', routes);
// apiServer.use('/auth', authRouter);
require("./routes/oauth")(apiServer);
/*
Global error handling
*/
apiServer.use((err, req, res, next) => {
    error((err.status || 500) + " " + error.message)
    // Handle error?
    res.status(err.status || 500).json(err)
})

module.exports = apiServer