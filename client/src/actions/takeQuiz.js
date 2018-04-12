import { takeQuizTypes } from './types';
import axios from 'axios';

const { FETCH_SPECIFIC_QUIZ, SEND_OPTION, FINISH_QUIZ } = takeQuizTypes;

export const fetchSpecificQuiz = quizId => async dispatch => {
  const res = await axios.get(`/api/quizzes/${quizId}`);

  dispatch({ type: FETCH_SPECIFIC_QUIZ, payload: res.data });
};

export const sendOption = option => ({
  type: SEND_OPTION,
  payload: option
});

export const finishQuiz = () => ({
  type: FINISH_QUIZ
});
