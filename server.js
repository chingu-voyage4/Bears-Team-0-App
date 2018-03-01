const express       = require("express");
const compression   = require("compression");
const bodyParser    = require("body-parser");
const morgan        = require("morgan");

const log   = require('debug')('api:server')
const error = require('debug')('api:error')

const routes = require('./routes')

const apiServer = express();
/*
Global Middleware
*/
apiServer.use(compression());
apiServer.use(morgan('dev'));
apiServer.use(bodyParser.urlencoded({extended : true}));
apiServer.use(bodyParser.json());
/*
API router
*/
apiServer.use('/api', routes);
/*
Set Port
*/
const port = process.env.PORT;
apiServer.set("port", port);

/*
Global error handling
*/
apiServer.use((err, req, res, next) => {
    error((err.status || 500) + " " + error.message)
    // Handle error?
})

apiServer.listen(port, () => {
    log(`Server listening on ${port}`)
});