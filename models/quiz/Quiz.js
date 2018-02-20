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
      totalAttempts: 0,
      correctAttempts: 0,
      incorrectAttempts: 0,
      datesUsed: [],
      datesUpdated: [],
    };
  }


}