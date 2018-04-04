import { FETCH_SPECIFIC_QUIZ } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SPECIFIC_QUIZ:
      return action.payload || false;
    default:
      return state;
  }
}
