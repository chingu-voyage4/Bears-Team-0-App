import { takeQuizTypes } from "./types";
const { FETCH_QUIZ } = takeQuizTypes;

export const fetchQuiz = quizId => ({
  type: FETCH_QUIZ,
  id: quizId
});
