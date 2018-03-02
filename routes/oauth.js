const passport        = require("passport");
const express         = require("express");
const oauthRouter      = express.Router();

module.exports = (app) => {
  app.get("/auth/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] }));

  // app.get("/auth/google/redirect",
  //   passport.authenticate("google"), (req, res, next) => {
  //     res.redirect("/");
  // });
}

// oauthRouter.get("/auth/google", passport.authenticate("google", { scope: [ "profile", "email" ] }));

// oauthRouter.get("/auth/google/redirect", passport.authenticate("google", (req, res, next) => {
//   res.redirect("/");
// }));

// module.exports = oauthRouter;