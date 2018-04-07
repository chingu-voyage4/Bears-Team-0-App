import {
  addOption,
  changeOption,
  deleteOption,
  toggleCorrectOption,
  changeQuestion
} from "../multipleChoice";

describe("multiple choice actions", () => {
  it("should add a new option to a multiple choice question", () => {
    const givenQuestionIndex = "foo";
    expect(addOption(givenQuestionIndex)).toEqual({
      type: "ADD_OPTION",
      index: "foo"
    });
  });

  it("should change an option of a multiple choice question", () => {
    const givenQuestionId = "foo",
      givenOptionId = "bar",
      mockEvent = {
        target: {
          value: "baz"
        }
      };
    expect(changeOption(givenQuestionId, givenOptionId, mockEvent)).toEqual({
      type: "CHANGE_OPTION",
      question: "foo",
      option: "bar",
      value: "baz"
    });
  });

  it("should toggle whether an option is a correct one", () => {
    const questionId = "foo",
      optionId = "bar";

    expect(toggleCorrectOption(questionId, optionId)).toEqual({
      type: "TOGGLE_CORRECT",
      question: "foo",
      option: "bar"
    });
  });

  it("should change the text of a given question", () => {
    const mockEvent = {
        target: {
          value: "bar"
        }
      },
      id = "foo";
    expect(changeQuestion(mockEvent, id)).toEqual({
      type: "CHANGE_QUESTION",
      question: "foo",
      payload: "bar"
    });
  });
});
