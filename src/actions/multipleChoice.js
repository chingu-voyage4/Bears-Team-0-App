import { multipleChoiceTypes } from "./types";
const { ADD_OPTION, CHANGE_OPTION, TOGGLE_CORRECT } = multipleChoiceTypes;

export const addOption = index => ({
  type: ADD_OPTION,
  index: index
});

export const changeOption = (questionId, optionId, e) => {
  console.log("in change option action creator");
  return {
    type: CHANGE_OPTION,
    question: questionId,
    option: optionId,
    value: e.target.value
  };
};

export const toggleCorrectOption = (questionId, optionId) => ({
  type: TOGGLE_CORRECT,
  question: questionId,
  option: optionId
});
