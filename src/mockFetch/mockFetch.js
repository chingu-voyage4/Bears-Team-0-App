import sendQuizzes from "./sendQuizzes";
import sendQuiz from "./sendQuiz";

export default endpoint => {
  const firstPart = str =>
    str.split("/").length > 3
      ? str
          .split("/")
          .slice(0, -1)
          .join("/")
      : str;
  const id = str => str.split("/").slice(-1);
  console.log("endpoint is: ", firstPart(endpoint));
  switch (firstPart(endpoint)) {
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
    case "/api/quiz":
      return sendQuiz();
    default:
      return new Promise();
  }
};
