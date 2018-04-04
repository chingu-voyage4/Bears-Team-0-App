module.exports = class Quiz {
  constructor(title, author, questions, description, _id = null) {
    if (_id !== null) {
      this._id = _id;
    }
    this.title = title;
    this.author = author;
    this.questions = questions;
    this.description = description;
    this.favorites = 0;
    // this.createdDate = "";
    // this.updatedDate = "";
  }
}