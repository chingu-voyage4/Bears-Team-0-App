import axios from 'axios';
import { quizTypes, takeQuizTypes } from './types';

const {
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  SUBMIT_QUIZ_START,
  FETCH_POPULAR_QUIZZES,
  FETCH_YOUR_QUIZZES,
  FETCH_ALL_QUIZZES,
} = quizTypes;

const { FETCH_SPECIFIC_QUIZ } = takeQuizTypes;

// Fetch Popular Quizzes
export const fetchPopularQuizzes = () => async (dispatch) => {
  const res = await axios.get('/api/quizzes/popular');

  dispatch({ type: FETCH_POPULAR_QUIZZES, payload: res.data });
};

// Fetch the User's Quizzes
export const fetchYourQuizzes = () => async (dispatch) => {
  const res = await axios.get('/api/quizzes');

  dispatch({ type: FETCH_YOUR_QUIZZES, payload: res.data });
};

/**
 * Update Quiz information - Requires Login
 * param - quiz is the updated quiz object
 * param - quizId is the _id from the quiz that needs to be updated
 */
export const updateQuiz = (quizId, quiz) => async (dispatch) => {
  const res = await axios.put(`/api/quizzes/${quizId}`, quiz);

  dispatch({ type: FETCH_SPECIFIC_QUIZ, payload: res.data });
};

/**
 * Update Quiz Results - Does Not Require Login
 * param - quiz is the updated quiz object
 * param - quizId is the _id from the quiz that needs to be updated
 */
export const updateQuizResults = (quizId, quiz) => async (dispatch) => {
  const res = await axios.put(`/api/quizzes/results/${quizId}`, quiz);

  dispatch({ type: FETCH_SPECIFIC_QUIZ, payload: res.data });
};

/**
 * For testing purposes only.
 * We don't need to actually pull all quizzes for any reason.
 */
export const fetchAllQuizzes = () => async (dispatch) => {
  const res = await axios.get('/api/quizzes/popular');

  dispatch({ type: FETCH_ALL_QUIZZES, payload: res.data });
};

// action to change the title of a quiz
export const changeTitle = e => ({
  type: CHANGE_TITLE,
  payload: e.target.value,
});

// action to change the description of a quiz
export const changeDescription = e => ({
  type: CHANGE_DESCRIPTION,
  payload: e.target.value,
});

// action to flip over the UI to the quiz making page
export const submitQuizStart = () => {
  return {
    type: SUBMIT_QUIZ_START,
  };
};

// // action to request all quizzes
// export const requestAllQuizzes = () => ({
//   type: REQUEST_ALL_QUIZZES
// });

// // action to receive all quizzes
// export const receiveAllQuizzes = quizzes => ({
//   type: RECEIVE_ALL_QUIZZES,
//   payload: quizzes
// });

// // action to request a user's quizzes
// export const requestYourQuizzes = userId => ({
//   type: REQUEST_YOUR_QUIZZES,
//   userId
// });

// // action to receive a user's quizzes
// export const receiveYourQuizzes = quizzes => ({
//   type: RECEIVE_YOUR_QUIZZES,
//   payload: quizzes
// });

// // see the above comment for fetchAllQuizzes
// export const fetchYourQuizzes = () => {
//   return function(dispatch) {
//     dispatch(requestYourQuizzes());
//     return mockFetch("/api/yourquizzes")
//       .then(
//         res => {
//           return res.json();
//         },
//         error => console.log("an error occurred...", error)
//       )
//       .then(json => dispatch(receiveYourQuizzes(json)));
//   };
// };

// This is an asynchronous action creator which returns a "thunk".
// According to the "redux-thunk" docs:
// "A thunk is a function that wraps an expression to delay its evaluation."
// In this case, the return value of fetchAllQuizzes is a function
// which itself takes a function called "dispatch" as a parameter.
// The "redux-thunk" library will call this thunk, passing in
// it's own dispatch function (allowing the dispatch of actions
// to our reducers).
// export const fetchAllQuizzes = () => {
//   return function(dispatch) {
//     dispatch(requestAllQuizzes());
//     return mockFetch("/api/allquizzes")
//       .then(
//         res => {
//           return res.json();
//         },
//         error => console.log("an error occurred...", error)
//       )
//       .then(json => dispatch(receiveAllQuizzes(json)));
//   };
// };
