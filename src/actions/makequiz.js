import { makeQuizTypes } from "./types";
const { ADD_MULTIPLE_CHOICE } = makeQuizTypes;

export const addMultipleChoice = () => {
  return {
    type: ADD_MULTIPLE_CHOICE
  };
};
