require("./Question");

module.exports = class Quiz {
  constructor(title, questions) {
    this.title = title;
    this.questions = questions;
    this.favorites = 0;

    //metadata
    if (!this.createdDate) {
      this.createdDate = generateCurrentDate();
    }
    this.updatedDate = generateCurrentDate();
  }
  
  addQuestion(question) {
    if (question instanceof Question) {
      this.questions.push(question);
    }
  }

}

function generateCurrentDate() {
    //let date = Date;
    const currentDate = Date.now();
    return currentDate;
}