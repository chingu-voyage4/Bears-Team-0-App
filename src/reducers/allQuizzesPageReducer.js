const initialState = {
  hello: "hello world",
  yourQuizzes: [],
  popularQuizzes: [],
  newQuizTitle: "",
  newQuizDescription: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return Object.assign({}, state, {
        newQuizTitle: action.payload
      });
    case "CHANGE_DESCRIPTION":
      return Object.assign({}, state, {
        newQuizDescription: action.payload
      });
    case "SUBMIT_QUIZ_START":
      console.log("submitting quiz start!");
      return state;
    case "RECEIVE_ALL_QUIZZES":
      return Object.assign({}, state, { popularQuizzes: action.payload });
    case "RECEIVE_YOUR_QUIZZES":
      return Object.assign({}, state, { yourQuizzes: action.payload });
    default:
      return state;
  }
};
