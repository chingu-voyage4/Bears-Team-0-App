import { takeQuizTypes } from "./types";
import mockFetch from "../mockFetch/mockFetch";

const { REQUEST_QUIZ, RECEIVE_QUIZ } = takeQuizTypes;

const requestQuiz = quizId => ({ type: REQUEST_QUIZ, id: quizId });

const receiveQuiz = data => ({
  type: RECEIVE_QUIZ,
  payload: data
});

export const fetchQuiz = quizId => {
  console.log("fetching quiz...");
  return dispatch => {
    dispatch(requestQuiz());
    return mockFetch(`/api/quiz/${quizId}`)
      .then(
        res => {
          //          console.log("fetched quiz is: ", res.json());
          return res.json();
        },
        error => console.log("an error occurred...", error)
      )
      .then(json => dispatch(receiveQuiz(json)));
  };
};
