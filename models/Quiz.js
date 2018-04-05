const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  author: String, 
  questions: Array,
  description: String,
  favorites: Number,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("quizzes", quizSchema);