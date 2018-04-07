const passport = require("passport");

module.exports = app => {

  /**
   * PATH for redirect to google login using passport
   */
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  /**
   * PATH for redirect from google login to client side
   */
  app.get(
    "/auth/google/redirect", 
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );

  /**
   * Logs out current user
   */
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  })
};
