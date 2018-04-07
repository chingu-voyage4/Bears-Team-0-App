import { multipleChoiceTypes } from "./types";
const {
  ADD_OPTION,
  CHANGE_OPTION,
  CHANGE_QUESTION,
  TOGGLE_CORRECT,
  DELETE_OPTION
} = multipleChoiceTypes;

// add option to multiple choice question
export const addOption = index => ({
  type: ADD_OPTION,
  index: index
});

// action to change multiple choice option text
export const changeOption = (questionId, optionId, event) => {
  return {
    type: CHANGE_OPTION,
    question: questionId,
    option: optionId,
    value: event.target.value
  };
};

// action to delete option
export const deleteOption = (questionId, optionId) => {
  return {
    type: DELETE_OPTION,
    question: questionId,
    option: optionId
  };
};

// action to toggle whether or not option is a "correct answer"
export const toggleCorrectOption = (questionId, optionId) => {
  return {
    type: TOGGLE_CORRECT,
    question: questionId,
    option: optionId
  };
};

// option to change the text of a question
export const changeQuestion = (event, id) => {
  return {
    type: CHANGE_QUESTION,
    question: id,
    payload: event.target.value
  };
};
