import { takeQuizTypes } from '../actions/types';

const {
  RECEIVE_QUIZ,
  SEND_OPTION,
  FETCH_SPECIFIC_QUIZ,
  FINISH_QUIZ
} = takeQuizTypes;

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
            answer: action.payload
          }
        ],
        questionCursor:
          state.questionCursor < state.questions.length
            ? state.questionCursor + 1
            : 0
      };
    case FINISH_QUIZ:
      return { ...state, questionCursor: 0 };
    case FETCH_SPECIFIC_QUIZ:
      return {
        ...state,
        answers: [],
        questions: action.payload.questions || []
      };
    default:
      return state;
  }
};
