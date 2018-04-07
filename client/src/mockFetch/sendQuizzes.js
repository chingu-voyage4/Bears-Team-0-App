import { dummyQuizzes } from "./dummyDataMaker";

export default ({ errorRate, waitTime, numberOfQuizzes }) =>
  new Promise((resolve, reject) => {
    const rollDie = Math.random();
    setTimeout(function() {
      if (rollDie > errorRate) {
        resolve({ json: () => dummyQuizzes(numberOfQuizzes) });
      } else {
        const message = "there was an error fetching all quizzes";
        reject(new Error(message));
      }
    }, waitTime);
  });
