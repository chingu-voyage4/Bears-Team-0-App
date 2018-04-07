import { addMultipleChoice, addDropdown, addTrueFalse } from "../makequiz";

describe("makequiz action", () => {
  it("should create an action to add a new multiple choice question", () => {
    expect(addMultipleChoice()).toEqual({
      type: "ADD_MULTIPLE_CHOICE"
    });
  });

  it("should create an action to add a new dropdown question", () => {
    expect(addDropdown()).toEqual({
      type: "ADD_DROPDOWN"
    });
  });

  it("should create an action to add a new true or false question", () => {
    expect(addTrueFalse()).toEqual({
      type: "ADD_TRUE_FALSE"
    });
  });
});
