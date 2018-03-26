import { takeQuizTypes } from "../actions/types";

const { RECEIVE_QUIZ } = takeQuizTypes;

const initialState = {
  questions: [],
  answers: [
    //question id
    //anser
  ],
  questionCursor: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUIZ:
      console.log("receiving  quiz");
      console.log("payload is: ", action.payload);
      return {
        ...state,
        questions: [...action.payload.questionData]
      };
    default:
      return state;
  }
};
