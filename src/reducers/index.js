import { combineReducers } from "redux";
import allQuizzesPageReducer from "./allQuizzesPageReducer";
import login from "./login";

export default combineReducers({
  allQuizzes: allQuizzesPageReducer,
  login: login
});
