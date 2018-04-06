import { FETCH_SPECIFIC_QUIZ } from "./types";
import axios from 'axios';

export const fetchSpecificQuiz = (quizId) => async dispatch => {
  const res = await axios.get(`/api/quizzes/${quizId}`);

  dispatch({ type: FETCH_SPECIFIC_QUIZ, payload: res.data });
};