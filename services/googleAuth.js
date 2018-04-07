const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/index");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLECLIENTID,
      clientSecret: keys.GOOGLESECRET,
      callbackURL: "/auth/google/redirect",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //record found
        done(null, existingUser);
      } else {
        //record not found
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
          familyName: profile.name.familyName,
          givenName: profile.name.givenName,
          emails: profile.emails,
          gender: profile.gender
        }).save();
        done(null, user);
      }
    }
  )
);
