const initialState = {
  yourQuizzes: [],
  popularQuizzes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_QUIZ_START":
      return state;
    case "FETCH_POPULAR_QUIZZES":
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
