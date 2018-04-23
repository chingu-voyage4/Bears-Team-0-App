const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  questions: Array,
  description: String,
  favorites: { type: Number, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  quizzesTaken: { type: Number, default: 0},
  resultAvg: { type: Number, default: 0}
});

mongoose.model("quizzes", quizSchema);
