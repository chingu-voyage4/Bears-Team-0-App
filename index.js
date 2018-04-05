const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/index");
require("./models/User");
require("./models/Quiz");
require("./services/googleAuth");

mongoose.connect(keys.MONGO_URI);

const app = express();

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

const PORT = process.env.PORT || 3001;
app.listen(PORT);
