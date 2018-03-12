import { multipleChoiceTypes } from "./types";
const {
  ADD_OPTION,
  CHANGE_OPTION,
  CHANGE_QUESTION,
  TOGGLE_CORRECT
} = multipleChoiceTypes;

export const addOption = index => ({
  type: ADD_OPTION,
  index: index
});

export const changeOption = (questionId, optionId, e) => {
  return {
    type: CHANGE_OPTION,
    question: questionId,
    option: optionId,
    value: e.target.value
  };
};

export const toggleCorrectOption = (questionId, optionId) => {
  return {
    type: TOGGLE_CORRECT,
    question: questionId,
    option: optionId
  };
};

export const changeQuestion = (e, id) => {
  return {
    type: CHANGE_QUESTION,
    question: id,
    payload: e.target.value
  };
};
