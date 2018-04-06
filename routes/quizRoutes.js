const mongoose = require("mongoose");

const Quiz = mongoose.model("quizzes");

module.exports = app => {
  /**
   * GET 6 most popular quizzes - Requires Login
   * TODO: Verify if this should require login
   */

  app.get("/api/quizzes/popular", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    const popularQuizzes = await Quiz.find().sort({ favorites: -1 }).limit(6);
    
    return res.send(popularQuizzes);
  })

  /**
   * GET Quiz by Id - Requires Login
   * TODO: Verify if this should require login
   */
  app.get("/api/quizzes/:id", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    const quiz = await Quiz.findOne({ _id: req.params.id });

    return res.send(quiz);
  });

   /**
   * GET all user's quizzes - Requires Login
   */

  app.get("/api/quizzes", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    const quizzes = await Quiz.find({ _user: req.user.id });

    return res.send(quizzes);
  });

  /**
   * POST Create Quiz - Requires Login
   */

  app.post("/api/quizzes", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    const quiz = await new Quiz({
      title: req.body.title,
      questions: req.body.questions,
      description: req.body.description,
      favorites: 0,
      _user: req.user.id
    }).save();

    res.send(quiz);
  });

  /**
   * PUT Update Quiz by Id - Requires Login
   */

  app.put("/api/quizzes/:id", (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    Quiz.findById(req.params.id, (err, quiz) => {
      if (err) {
        res.status(500).send(err);
      } else {
        quiz.title = req.body.title || quiz.title;
        quiz.questions = req.body.questions || quiz.questions;
        quiz.description = req.body.description || quiz.description;
        quiz.favorites = req.body.favorites || quiz.favorites;
        quiz._user = req.user.id;

        quiz.save((err, quiz) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send(quiz);
        });
      }
    });
  });
  
  /**
   * DELETE Delete Quiz by Id - Requires Login
   */

  app.delete("/api/quizzes/:id", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login Required" });
    }

    const quiz = await Quiz.findByIdAndRemove(req.params.id);

    return res.send(req.user);
  });
};
