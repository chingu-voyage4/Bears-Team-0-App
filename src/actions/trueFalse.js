import { trueFalseTypes } from "./types";
const { TOGGLE, DELETE_QUESTION } = trueFalseTypes;

export const toggleTrueFalse = questionId => {
  return { type: TOGGLE, question: questionId };
};

export const deleteQuestion = questionId => {
  return { type: DELETE_QUESTION, question: questionId };
};
