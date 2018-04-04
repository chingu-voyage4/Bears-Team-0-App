import { combineReducers } from "redux";
import allQuizzesPageReducer from "./allQuizzesPageReducer";
import login from "./login";
import makeQuizPageReducer from "./makeQuizPageReducer";
import takeQuizPageReducer from "./takeQuizPageReducer";
import titleAndDescription from "./titleAndDescription";

export default combineReducers({
  titleAndDescription: titleAndDescription,
  allQuizzes: allQuizzesPageReducer,
  makeQuizzes: makeQuizPageReducer,
  takeQuizzes: takeQuizPageReducer,
  login: login
});
