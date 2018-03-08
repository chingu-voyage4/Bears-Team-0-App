import { makeQuizTypes, multipleChoiceTypes } from "../actions/types";
import shortid from "shortid";

const { ADD_MULTIPLE_CHOICE } = makeQuizTypes;
const { ADD_OPTION, CHANGE_OPTION, TOGGLE_CORRECT } = multipleChoiceTypes;
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
            id: shortid.generate(),
            question: "",
            format: "multiple choice",
            options: [],
            answer: ""
          }
        ]
      };
    case ADD_OPTION:
      return {
        ...state,
        questions: state.questions.map(question => {
          // find the question which matches the given id
          return question.id === action.index
            ? // add a new option if this is the right question
              {
                ...question,
                options: [
                  ...question.options,
                  { val: "", id: shortid.generate() }
                ]
              }
            : // else return the quiz already in place
              { ...question };
        })
      };
    case CHANGE_OPTION:
      return {
        ...state,
        questions: [
          ...state.questions.map(
            question =>
              question.id === action.question
                ? {
                    ...question,
                    options: question.options.map(
                      option =>
                        option.id === action.option
                          ? { ...option, val: action.value }
                          : option
                    )
                  }
                : question
          )
        ]
      };
    case TOGGLE_CORRECT:
      console.log("toggling correct");
      return {
        ...state
      };

    default:
      return state;
  }
};
