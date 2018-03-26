export default () =>
  new Promise((resolve, reject) => {
    resolve({
      json: () => ({
        id: "test",
        questionData: [
          // true false question
          {
            type: "true false",
            question: "An elephant is heavier than the moon",
            answer: true
          },
          // multiple choice question
          {
            type: "multiple choice",
            question: "What's the heaviest?",
            options: ["moon", "elephant", "neil armstrong", "peanut"],
            answerIndex: 0
          },
          // dropdown question
          {
            type: "dropdown",
            question: "What's the heaviest?",
            options: ["moon", "elephant", "neil armstrong", "peanut"],
            answerIndex: 0
          }
        ]
      })
    });
  });
