<<<<<<< HEAD
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config");
=======
const express       = require("express");
const compression   = require("compression");
const bodyParser    = require("body-parser");
const morgan        = require("morgan");
const helmet        = require("helmet")
const cors          = require("cors");
const config        = require("./config");
>>>>>>> develop

const log = require("debug")("api:server");
const error = require("debug")("api:error");

const router = require("./routes");
const auth = require("./auth");

const apiServer = express();
/*
Global Middleware
*/
apiServer.use(cors());
apiServer.use(compression());
<<<<<<< HEAD
apiServer.use(morgan("dev"));
apiServer.use(bodyParser.urlencoded({ extended: true }));
=======
apiServer.use(helmet());
apiServer.use(morgan('dev'));
apiServer.use(bodyParser.urlencoded({extended : true}));
>>>>>>> develop
apiServer.use(bodyParser.json());

apiServer.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*
Passport initialization
*/
auth.initPassport(apiServer);
/*
API router
*/
apiServer.use("/auth", auth.router);
apiServer.use("/api", router);
/*
Global error handling
*/
apiServer.use((err, req, res, next) => {
  error((err.status || 500) + " " + error.message);
  // Handle error?
  res.status(err.status || 500).json({ error: err.message, trace: err.stack });
});

module.exports = apiServer;
