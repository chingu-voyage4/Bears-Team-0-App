import { takeQuizTypes } from '../actions/types';

const { RECEIVE_QUIZ, SEND_OPTION, FETCH_SPECIFIC_QUIZ } = takeQuizTypes;

const initialState = {
  questions: [],
  answers: [
    // question id
    // answer
  ],
  questionCursor: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUIZ:
      return {
        ...state,
        questions: [...action.payload.questionData]
      };
    case SEND_OPTION:
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            // questionId: state.questions[state.questionCursor].id,
            answer: action.payload
          }
        ],
        questionCursor: state.questionCursor + 1
      };
    case FETCH_SPECIFIC_QUIZ:
      return action.payload || false;
    default:
      return state;
  }
};
