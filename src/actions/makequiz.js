import { makeQuizTypes } from "./types";
const { ADD_MULTIPLE_CHOICE, ADD_TRUE_FALSE } = makeQuizTypes;

export const addMultipleChoice = () => {
  return {
    type: ADD_MULTIPLE_CHOICE
  };
};

export const addTrueFalse = () => {
  return {
    type: ADD_TRUE_FALSE
  };
};
