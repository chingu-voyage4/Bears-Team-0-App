import { multipleChoiceTypes } from "./types";
const { ADD_OPTION } = multipleChoiceTypes;

export const addOption = index => ({
  type: ADD_OPTION,
  index: index
});
