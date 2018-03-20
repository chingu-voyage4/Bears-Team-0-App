import {
  requestAllQuizzes,
  receiveAllQuizzes,
  requestYourQuizzes
} from "../quizzes";

describe("quiz actions", () => {
  it("should request all quizzes", () => {
    expect(requestAllQuizzes()).toEqual({ type: "REQUEST_ALL_QUIZZES" });
  });

  it("should receive all quizzes", () => {
    const quizzes = {
      foo: "foo",
      bar: "bar"
    };
    expect(receiveAllQuizzes(quizzes)).toEqual({
      type: "RECEIVE_ALL_QUIZZES",
      payload: { foo: "foo", bar: "bar" }
    });
  });

  it("should request your quizzes", () => {
    const userId = 1;

    expect(requestYourQuizzes(userId)).toEqual({
      type: "REQUEST_YOUR_QUIZZES",
      userId: 1
    });
  });
});
