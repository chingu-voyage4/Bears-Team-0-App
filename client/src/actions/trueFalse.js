import { trueFalseTypes } from "./types";
const { TOGGLE, DELETE_QUESTION } = trueFalseTypes;

// toggle whether the correct answer is "true" or "false"
export const toggleTrueFalse = questionId => {
  return { type: TOGGLE, question: questionId };
};

// delete question with a given ID
export const deleteQuestion = questionId => {
  return { type: DELETE_QUESTION, question: questionId };
};
