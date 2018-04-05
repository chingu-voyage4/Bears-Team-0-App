import mockFetch from '../mockFetch/mockFetch';
import { quizTypes } from './types';

const {
  REQUEST_ALL_QUIZZES,
  RECEIVE_ALL_QUIZZES,
  REQUEST_YOUR_QUIZZES,
  RECEIVE_YOUR_QUIZZES,
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  SUBMIT_QUIZ_START,
} = quizTypes;

// action to request all quizzes
export const requestAllQuizzes = () => ({
  type: REQUEST_ALL_QUIZZES,
});

// action to receive all quizzes
export const receiveAllQuizzes = quizzes => ({
  type: RECEIVE_ALL_QUIZZES,
  payload: quizzes,
});

// action to request a user's quizzes
export const requestYourQuizzes = userId => ({
  type: REQUEST_YOUR_QUIZZES,
  userId,
});

// action to receive a user's quizzes
export const receiveYourQuizzes = quizzes => ({
  type: RECEIVE_YOUR_QUIZZES,
  payload: quizzes,
});

// This is an asynchronous action creator which returns a "thunk".
// According to the "redux-thunk" docs:
// "A thunk is a function that wraps an expression to delay its evaluation."
// In this case, the return value of fetchAllQuizzes is a function
// which itself takes a function called "dispatch" as a parameter.
// The "redux-thunk" library will call this thunk, passing in
// it's own dispatch function (allowing the dispatch of actions
// to our reducers).
export const fetchAllQuizzes = () => function (dispatch) {
  dispatch(requestAllQuizzes());
  return mockFetch('/api/allquizzes')
    .then(
      res => res.json(),
      error => console.log('an error occurred...', error),
    )
    .then(json => dispatch(receiveAllQuizzes(json)));
};

// see the above comment for fetchAllQuizzes
export const fetchYourQuizzes = () => function (dispatch) {
  dispatch(requestYourQuizzes());
  return mockFetch('/api/yourquizzes')
    .then(
      res => res.json(),
      error => console.log('an error occurred...', error),
    )
    .then(json => dispatch(receiveYourQuizzes(json)));
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
export const submitQuizStart = () => ({
  type: SUBMIT_QUIZ_START,
});
