import { makeQuizTypes } from "../actions/types";
const { ADD_MULTIPLE_CHOICE } = makeQuizTypes;
const initialState = {
  title: "",
  description: "",
  questions: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MULTIPLE_CHOICE:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            question: "",
            format: "multiple choice",
            options: {},
            answer: ""
          }
        ]
      };
    default:
      return state;
  }
};
