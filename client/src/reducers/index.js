import { combineReducers } from 'redux';
import allQuizzesPageReducer from './allQuizzesPageReducer';
import userReducer from './userReducer';
import makeQuizPageReducer from './makeQuizPageReducer';
import takeQuizPageReducer from './takeQuizPageReducer';
import titleAndDescriptionReducer from './titleAndDescription';

export default combineReducers({
  titleAndDescription: titleAndDescriptionReducer,
  allQuizzes: allQuizzesPageReducer,
  makeQuizzes: makeQuizPageReducer,
  takeQuizzes: takeQuizPageReducer,
  user: userReducer,
});
