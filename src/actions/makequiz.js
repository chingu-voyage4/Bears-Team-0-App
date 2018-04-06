// TODO: sync title and description with local storage
import { makeQuizTypes, dropdownTypes } from './types';
import axios from 'axios';

const { ADD_MULTIPLE_CHOICE, ADD_TRUE_FALSE, QUIZ_WAS_SUBMITTED } = makeQuizTypes,
  { ADD_DROPDOWN } = dropdownTypes;

// action to add multiple choice question
export const addMultipleChoice = () => ({
  type: ADD_MULTIPLE_CHOICE,
});

// action to add true or false question
export const addTrueFalse = () => ({
  type: ADD_TRUE_FALSE,
});

export const addDropdown = () => ({
  type: ADD_DROPDOWN,
});

export const submitQuiz = ({ title, description, questions }) => (dispatch) => {
  // make call to server here
  const quiz = {
    quiz: { title, description, questions },
  };
  return (
    axios
      .post(process.env.REACT_APP_CREATE_NEW_QUIZ_URL, quiz)
      // do something with data here
      .then(() => {
        dispatch({ type: QUIZ_WAS_SUBMITTED });
      })
      .catch(err => alert(err))
  );
};
