import { dummyQuizzes } from "./dummyDataMaker";

export default endpoint => {
  switch (endpoint) {
    case "/api/yourquizzes":
      return new Promise((resolve, reject) => {
        const rollDie = Math.random(),
          // 5% chance of rejecting with an error
          errorRate = 0.05;

        if (rollDie > errorRate) {
          resolve({ json: () => dummyQuizzes(3) });
        } else {
          const message = "there was an error fetching all quizzes";
          reject(new Error(message));
        }
      });
    case "/api/allquizzes":
      return new Promise((resolve, reject) => {
        const rollDie = Math.random(),
          // 5% chance of rejecting with an error
          errorRate = 0.05;

        if (rollDie > errorRate) {
          resolve({ json: () => dummyQuizzes(6) });
        } else {
          const message = "there was an error fetching all quizzes";
          reject(new Error(message));
        }
      });
    default:
      return new Promise();
  }
};
