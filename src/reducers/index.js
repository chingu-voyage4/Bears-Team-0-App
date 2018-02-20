import { combineReducers } from "redux";
import allQuizzesPageReducer from "./allQuizzesPageReducer";

export default combineReducers({
  allQuizzes: allQuizzesPageReducer
});
