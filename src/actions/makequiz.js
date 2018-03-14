import { makeQuizTypes } from "./types";
const { ADD_MULTIPLE_CHOICE, ADD_TRUE_FALSE } = makeQuizTypes;

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
