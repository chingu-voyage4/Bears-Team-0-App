import sendQuizzes from "./sendQuizzes";

export default endpoint => {
  switch (endpoint) {
    case "/api/yourquizzes":
      return sendQuizzes({
        errorRate: 0.05,
        waitTime: Math.random() * 2000,
        numberOfQuizzes: 3
      });
    case "/api/allquizzes":
      return sendQuizzes({
        errorRate: 0.05,
        waitTime: Math.random() * 2000,
        numberOfQuizzes: 6
      });
    default:
      return new Promise();
  }
};
