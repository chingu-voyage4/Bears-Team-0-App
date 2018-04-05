import { takeQuizTypes } from './types';
import mockFetch from '../mockFetch/mockFetch';

const { REQUEST_QUIZ, RECEIVE_QUIZ, SEND_OPTION } = takeQuizTypes;

const requestQuiz = quizId => ({ type: REQUEST_QUIZ, id: quizId });

const receiveQuiz = data => ({
  type: RECEIVE_QUIZ,
  payload: data,
});

export const fetchQuiz = quizId => (dispatch) => {
  dispatch(requestQuiz(quizId));
  return mockFetch(`/api/quiz/${quizId}`)
    .then(res => res.json())
    .then(json => dispatch(receiveQuiz(json)));
};

export const sendOption = option => ({
  type: SEND_OPTION,
  payload: option,
});
