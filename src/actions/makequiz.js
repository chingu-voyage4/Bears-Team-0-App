// TODO: sync title and description with local storage
import { makeQuizTypes, dropdownTypes, userTypes } from "./types";
import axios from "axios";

const { ADD_MULTIPLE_CHOICE, ADD_TRUE_FALSE } = makeQuizTypes,
  { FETCH_USER } = userTypes,
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

/**
 * Creates a Quiz
 * @param {} Object containing String title, String author, String description, Array of questions
 */
export const submitQuiz = ({ title, description, questions }) => async dispatch => {
  const quiz = {
    title: title,
    description: description,
    questions: questions
  };

  const res = await axios.post("/api/quizzes", quiz);
  dispatch({type: FETCH_USER, payload: res.data});
    
};
