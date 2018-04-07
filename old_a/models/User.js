const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  familyName: String,
  givenName: String,
  emails: Object,
  gender: String
});

mongoose.model("users", userSchema);