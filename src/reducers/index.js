import { combineReducers } from "redux";
import allQuizzesPageReducer from "./allQuizzesPageReducer";
import login from "./login";
import makeQuizPageReducer from "./makeQuizPageReducer";
import takeQuizPageReducer from "./takeQuizPageReducer";

export default combineReducers({
  allQuizzes: allQuizzesPageReducer,
  makeQuizzes: makeQuizPageReducer,
  takeQuizzes: takeQuizPageReducer,
  login: login
});
