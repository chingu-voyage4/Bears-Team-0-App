import mockFetch from "../mockFetch/mockFetch";
import { quizTypes } from "./types";
const {
  REQUEST_ALL_QUIZZES,
  RECEIVE_ALL_QUIZZES,
  REQUEST_YOUR_QUIZZES,
  RECEIVE_YOUR_QUIZZES,
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  SUBMIT_QUIZ_START
} = quizTypes;

export const requestAllQuizzes = () => ({
  type: REQUEST_ALL_QUIZZES
});

export const receiveAllQuizzes = quizzes => ({
  type: RECEIVE_ALL_QUIZZES,
  payload: quizzes
});

export const requestYourQuizzes = userId => ({
  type: REQUEST_YOUR_QUIZZES,
  userId
});

export const receiveYourQuizzes = quizzes => ({
  type: RECEIVE_YOUR_QUIZZES,
  payload: quizzes
});

export const fetchAllQuizzes = () => {
  return function(dispatch) {
    dispatch(requestAllQuizzes());
    return mockFetch("/api/allquizzes")
      .then(
        res => {
          return res.json();
        },
        error => console.log("an error occurred...", error)
      )
      .then(json => dispatch(receiveAllQuizzes(json)));
  };
};

export const fetchYourQuizzes = () => {
  return function(dispatch) {
    dispatch(requestYourQuizzes());
    return mockFetch("/api/yourquizzes")
      .then(
        res => {
          return res.json();
        },
        error => console.log("an error occurred...", error)
      )
      .then(json => dispatch(receiveYourQuizzes(json)));
  };
};

export const changeTitle = e => {
  return {
    type: CHANGE_TITLE,
    payload: e.target.value
  };
};

export const changeDescription = e => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: e.target.value
  };
};

export const submitQuizStart = () => {
  return {
    type: SUBMIT_QUIZ_START
  };
};
