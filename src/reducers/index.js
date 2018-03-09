import { combineReducers } from "redux";
import allQuizzesPageReducer from "./allQuizzesPageReducer";
import login from "./login";
import makeQuizPageReducer from "./makeQuizPageReducer";

export default combineReducers({
  allQuizzes: allQuizzesPageReducer,
  makeQuizzes: makeQuizPageReducer,
  login: login
});
