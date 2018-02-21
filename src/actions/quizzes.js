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
export const getYourQuizzes = userId => ({
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
          console.log("data is: ", res.json());
          return res.json();
        },
        error => console.log("an error occurred...", error)
      )
      .then(json => dispatch(receiveAllQuizzes(json)));
  };
};

export const fetchYourQuizzes = () => {
  return function(dispatch) {
    dispatch(requestAllQuizzes());
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
