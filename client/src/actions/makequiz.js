// TODO: sync title and description with local storage
import axios from 'axios';

import { makeQuizTypes, dropdownTypes, userTypes } from './types';
const {
    ADD_MULTIPLE_CHOICE,
    ADD_TRUE_FALSE,
    QUIZ_WAS_SUBMITTED
  } = makeQuizTypes,
  { FETCH_USER } = userTypes,
  { ADD_DROPDOWN } = dropdownTypes;

// action to add multiple choice question
export const addMultipleChoice = () => ({
  type: ADD_MULTIPLE_CHOICE
});

// action to add true or false question
export const addTrueFalse = () => ({
  type: ADD_TRUE_FALSE
});

export const addDropdown = () => ({
  type: ADD_DROPDOWN
});

/**
 * Creates a Quiz
 * @param {} Object containing String title, String author, String description, Array of questions
 */
export const submitQuiz = ({
  title,
  description,
  questions
}) => async dispatch => {
  const quiz = {
    title: title,
    description: description,
    questions: questions
  };

  const res = await axios.post('/api/quizzes', quiz);
  dispatch({ type: FETCH_USER, payload: res.data });
  dispatch({ type: QUIZ_WAS_SUBMITTED });
};
