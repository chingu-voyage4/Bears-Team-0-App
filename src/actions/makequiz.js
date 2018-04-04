// TODO: sync title and description with local storage
import { makeQuizTypes, dropdownTypes } from "./types";
import axios from "axios";

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

export const submitQuiz = ({ title, description, questions }) => async dispatch => {
  console.log("inside submit quiz, description is: ", description);
  console.log("quiz title is: ", title);

  const quiz = {
    quiz: { title, description, questions }
  };

  const res = await axios.post("/api/quizzes/", quiz);

  dispatch({type: SUBMIT_QUIZ, payload: res.data});
    
};
