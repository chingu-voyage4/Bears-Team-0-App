const util            = require("util");
const passport        = require("passport");
const express         = require("express");
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const jwt             = require("jsonwebtoken");
const config          = require("../config/index");
const User            = require("../models/user/mongodb_user");
const authRouter      = express.Router();

const log     = require("debug")("api:auth-routes");
const error   = require("debug")("error");

authRouter.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

authRouter.get('/google/redirect', 
  passport.authenticate('google',
  { failureRedirect: '/login', session: false }),
  function(req, res) {
    // Successful authentication.
    const token = jwt.sign({ user: req.user }, Buffer.from("secret", "base64"), { expiresIn: 1440 });
    log("BEFORE REDIRECT " + util.inspect(req.user))
    // res.redirect('/');
    res.json({ user: req.user, token: token});
  });

// authRouter.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

module.exports.router = authRouter

module.exports.jwtCheck = function jwtCheck(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    log("JWT " + util.inspect(req.headers))
    jwt.verify(req.headers.authorization.split(" ")[1], Buffer("secret", "base64"), (err, decoded) => {
      if (err) next(err);
      log("Decoded: " + util.inspect(decoded));
      next();
    });
  } else {
    const err = new Error("User not authenticated")
    next(err)
  }
}

module.exports.initPassport = (api) => {
  api.use(passport.initialize());
  // api.use(passport.session());
}

passport.use(new GoogleStrategy({
  clientID: config.GOOGLECLIENTID,
  clientSecret: config.GOOGLESECRET,
  callbackURL: "http://localhost:3001/auth/google/redirect"
},
function(accessToken, refreshToken, profile, cb) {
    const user = {
      googleId: profile.id,
      displayName: profile.displayName,
      familyName: profile.name.familyName,
      givenName: profile.name.givenName,
      emails: profile.emails,
      photos: profile.photos,
      gender: profile.gender,
      provider: profile.provider
    }
    log("Google profile " + util.inspect(user))

    User.findOrCreate(user).then((user) => {
      log("Google Strategy " + util.inspect(user));
      return cb(null, user);
    }) 
      .catch(err => {
      error("Error in Google Strategy");
      return cb(err, null);
    });
  })
);

// passport.serializeUser((user, done) => {
//   log("Serializing " + user.id);
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   ("Deserializing " + util.inspect(id));
//   userModel.read(id).then(user => {
//     log("Deserializing user: " + util.inspect(user));
//     done(null, user);
//   }).catch(err => {
//     log("Error deserializing");
//     done(err, null);
//   });
// });