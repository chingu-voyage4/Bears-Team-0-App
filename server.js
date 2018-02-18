const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const db = require("mongodb");

const routes = require('./routes')

const apiServer = express();

apiServer.use(compression());
apiServer.use(bodyParser.urlencoded({extended : true}));
apiServer.use(bodyParser.json());

apiServer.use('/api', routes);

const port = process.env.PORT;
apiServer.set("port", port);

apiServer.listen(port, () => {
    console.log("port is active " + port);
});