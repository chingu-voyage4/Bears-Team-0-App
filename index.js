const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/index");
require("./models/User");
require("./models/Quiz");
require("./services/googleAuth");

mongoose.connect(keys.MONGO_URI);

const app = express();
app.use(bodyParser.json());

app.use(cookieSession({
  // Max Age: 15 days.
  maxAge: 15 * 24 * 60 * 60 * 1000,
  keys: [keys.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/quizRoutes")(app);
require("./routes/userRoutes")(app);

// Points Heroku to the correct files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
