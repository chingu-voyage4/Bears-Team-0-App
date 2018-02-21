import mockFetch from "../mockFetch/mockFetch";

const REQUEST_ALL_QUIZZES = "REQUEST_ALL_QUIZZES";
export const requestAllQuizzes = () => ({
  type: REQUEST_ALL_QUIZZES
});

const RECEIVE_ALL_QUIZZES = "RECEIVE_ALL_QUIZZES";
export const receiveAllQuizzes = quizzes => ({
  type: RECEIVE_ALL_QUIZZES,
  payload: quizzes
});

const REQUEST_YOUR_QUIZZES = "REQUEST_YOUR_QUIZZES";
export const requestYourQuizzes = userId => ({
  type: REQUEST_YOUR_QUIZZES,
  userId
});

const RECEIVE_YOUR_QUIZZES = "RECEIVE_YOUR_QUIZZES";
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

const CHANGE_TITLE = "CHANGE_TITLE";
export const changeTitle = e => {
  return {
    type: CHANGE_TITLE,
    payload: e.target.value
  };
};

const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
export const changeDescription = e => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: e.target.value
  };
};

const SUBMIT_QUIZ_START = "SUBMIT_QUIZ_START";
export const submitQuizStart = () => {
  console.log("in submit quiz start action creator");
  return {
    type: SUBMIT_QUIZ_START
  };
};
