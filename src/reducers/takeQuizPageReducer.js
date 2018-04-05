import { takeQuizTypes } from "../actions/types";

const { FETCH_SPECIFIC_QUIZ } = takeQuizTypes;

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SPECIFIC_QUIZ:
      return action.payload || false;
    default:
      return state;
  }
}
