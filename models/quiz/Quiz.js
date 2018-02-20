module.exports = class Quiz {
  constructor(title) {
    this.title = title;
    this.questions = [];

    //metadata
    let date = new Date;
    const dateWhenConstructorCalled = date.toUTCString();
    this.createdDate = dateWhenConstructorCalled;
    this.updatedDate = dateWhenConstructorCalled;

    //data
    this.quizData = {
      favorites: 0,
      questionsAttempted: 0,
      correctlyAnswered: 0,
      incorrectlyAnswered: 0,
      

    };
  }


}