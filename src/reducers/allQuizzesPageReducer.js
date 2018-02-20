import { dummyQuizzes } from "./dummyDataMaker";

const initialState = {
  hello: "hello world",
  yourQuizzes: dummyQuizzes(3),
  popularQuizzes: dummyQuizzes(6),
  quizMaker: {
    title: "",
    description: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
