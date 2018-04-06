// all action type constants
export const quizTypes = {
  REQUEST_ALL_QUIZZES: "REQUEST_ALL_QUIZZES",
  RECEIVE_ALL_QUIZZES: "RECEIVE_ALL_QUIZZES",
  REQUEST_YOUR_QUIZZES: "REQUEST_YOUR_QUIZZES",
  RECEIVE_YOUR_QUIZZES: "RECEIVE_YOUR_QUIZZES",
  CHANGE_TITLE: "CHANGE_TITLE",
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_QUESTION: "CHANGE_QUESTION",
  SUBMIT_QUIZ_START: "SUBMIT_QUIZ_START",
  FETCH_POPULAR_QUIZZES: "FETCH_POPULAR_QUIZZES",
  FETCH_YOUR_QUIZZES: "FETCH_YOUR_QUIZZES",
  FETCH_ALL_QUIZZES: "FETCH_ALL_QUIZZES"
};

export const userTypes = {
  FETCH_USER: "FETCH_USER"
};

export const makeQuizTypes = {
  ADD_MULTIPLE_CHOICE: "ADD_MULTIPLE_CHOICE",
  ADD_TRUE_FALSE: "ADD_TRUE_FALSE"
};

export const multipleChoiceTypes = {
  ADD_OPTION: "ADD_OPTION",
  CHANGE_OPTION: "CHANGE_OPTION",
  CHANGE_QUESTION: "CHANGE_QUESTION",
  TOGGLE_CORRECT: "TOGGLE_CORRECT",
  DELETE_OPTION: "DELETE_OPTION"
};

export const trueFalseTypes = {
  TOGGLE: "TOGGLE",
  DELETE_QUESTION: "DELETE_QUESTION"
};

export const dropdownTypes = {
  ADD_DROPDOWN: "ADD_DROPDOWN"
};

export const takeQuizTypes = {
  FETCH_SPECIFIC_QUIZ: "FETCH_SPECIFIC_QUIZ"
};
