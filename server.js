const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const db = require("mongodb");

const apiServer = express();

apiServer.use(compression());
apiServer.use(bodyParser.urlencoded({extended : true}));
apiServer.use(bodyParser.json());

const port = process.env.PORT;
apiServer.set("port", port);

apiServer.listen(port, () => {
    console.log("port is active");
});