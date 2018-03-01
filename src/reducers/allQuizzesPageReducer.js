const initialState = {
  yourQuizzes: [],
  popularQuizzes: [],
  newQuiz: {
    title: "",
    description: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        newQuiz: {
          ...state.newQuiz,
          title: action.payload
        }
      };
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        newQuiz: {
          ...state.newQuiz,
          description: action.payload
        }
      };
    case "SUBMIT_QUIZ_START":
      console.log("submitting quiz start!");
      return state;
    case "RECEIVE_ALL_QUIZZES":
      return {
        ...state,
        popularQuizzes: action.payload
      };
    case "RECEIVE_YOUR_QUIZZES":
      return {
        ...state,
        yourQuizzes: action.payload
      };
    default:
      return state;
  }
};
