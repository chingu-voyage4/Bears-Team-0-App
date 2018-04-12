import { loadState } from '../store/localStorage';

import { makeQuizTypes } from '../actions/types';

const { QUIZ_WAS_SUBMITTED } = makeQuizTypes;

const cachedTitleAndDescription = loadState('titleAndDescription');

const initialState = cachedTitleAndDescription || {
  title: '',
  description: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.payload
      };
    case 'CHANGE_DESCRIPTION':
      return {
        ...state,
        description: action.payload
      };
    case QUIZ_WAS_SUBMITTED:
      return {
        title: '',
        description: ''
      };
    default:
      return state;
  }
};
