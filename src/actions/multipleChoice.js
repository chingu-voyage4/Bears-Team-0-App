import { multipleChoiceTypes } from "./types";
const {
  ADD_OPTION,
  CHANGE_OPTION,
  CHANGE_QUESTION,
  TOGGLE_CORRECT,
  DELETE_OPTION
} = multipleChoiceTypes;

export const addOption = index => ({
  type: ADD_OPTION,
  index: index
});

export const changeOption = (questionId, optionId, event) => {
  return {
    type: CHANGE_OPTION,
    question: questionId,
    option: optionId,
    value: event.target.value
  };
};

export const deleteOption = (questionId, optionId) => {
  return {
    type: DELETE_OPTION,
    question: questionId,
    option: optionId
  };
};

export const toggleCorrectOption = (questionId, optionId) => {
  return {
    type: TOGGLE_CORRECT,
    question: questionId,
    option: optionId
  };
};

export const changeQuestion = (event, id) => {
  return {
    type: CHANGE_QUESTION,
    question: id,
    payload: event.target.value
  };
};
