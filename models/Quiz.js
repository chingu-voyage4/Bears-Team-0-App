const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  questions: Array,
  description: String,
  favorites: { type: Number, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("quizzes", quizSchema);