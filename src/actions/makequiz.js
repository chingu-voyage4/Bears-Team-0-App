import { makeQuizTypes, dropdownTypes } from "./types";
const { ADD_MULTIPLE_CHOICE, ADD_TRUE_FALSE, SUBMIT_QUIZ } = makeQuizTypes,
  { ADD_DROPDOWN } = dropdownTypes;

// action to add multiple choice question
export const addMultipleChoice = () => {
  return {
    type: ADD_MULTIPLE_CHOICE
  };
};

// action to add true or false question
export const addTrueFalse = () => {
  return {
    type: ADD_TRUE_FALSE
  };
};

export const addDropdown = () => {
  return {
    type: ADD_DROPDOWN
  };
};

export const submitQuiz = quiz => {
  return dispatch => {
    // make call to server here
  };
};
