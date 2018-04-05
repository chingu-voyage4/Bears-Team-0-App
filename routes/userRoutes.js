const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {
  // User creation occurs in authRoutes
  // Not enabling deletion of user via API

  /**
   * GETS Current User
   * Returns null if user is logged out
   */
  app.get("/api/users/currentUser", (req, res) => {
    res.send(req.user);
  });

  /**
   * GET User by Id - Requires Login
   * TODO: Verify that this is needed.
   */
  app.get("/api/users/:id", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    const user = await User.findById({ id: req.user.id });
    return res.send(user);
  })

  /**
   * PUT Update User by Id - Requires Login
   */
  app.put("/api/users/:id", (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        user.googleId = req.body.googleId;
        user.displayName = req.body.displayName || user.displayName;
        user.familyName = req.body.familyName || user.familyName;
        user.givenName = req.body.givenName || user.givenName;
        user.emails = req.body.emails || user.emails;
        user.gender = req.body.gender || user.gender;

        user.save((err, user) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send(user);
        });
      }
    });
  })
}