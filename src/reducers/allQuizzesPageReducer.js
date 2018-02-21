const initialState = {
  hello: "hello world",
  yourQuizzes: [],
  popularQuizzes: [],
  quizMaker: {
    title: "",
    description: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_ALL_QUIZZES":
      console.log("receiving all quizzes");
      console.log("action is: ", action);
      return Object.assign({}, state, { popularQuizzes: action.payload });
    case "RECEIVE_YOUR_QUIZZES":
      console.log("get your quizzes");
      return Object.assign({}, state, { yourQuizzes: action.payload });
    default:
      return state;
  }
};
