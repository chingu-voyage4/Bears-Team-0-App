const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("../config");
const userModel = require("../models/user/mongodb_user");

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   userModel.read(id).then(user => {
//     done(null, user);
//   });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLECLIENTID,
      clientSecret: config.GOOGLESECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken)
    }
  )
)