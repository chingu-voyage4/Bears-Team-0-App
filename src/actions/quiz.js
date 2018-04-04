import { FETCH_SPECIFIC_QUIZ, FETCH_ALL_QUIZZES } from "./types";
import axios from 'axios';

export const fetchSpecificQuiz = (quizId) => async dispatch => {
  const res = await axios.get(`/api/quizzes/${quizId}`);

  dispatch({ type: FETCH_SPECIFIC_QUIZ, payload: res.data });
};

// TODO: MOVE TO QUIZZES
export const fetchAllQuizzes = () => async dispatch => {
  const res = await axios.get("/api/quizzes/popular");

  dispatch({type: FETCH_ALL_QUIZZES, payload: res.data });
}