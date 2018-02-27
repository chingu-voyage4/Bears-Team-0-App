import React from "react";
import ReactDOM from "react-dom";
import { AllQuizzes } from "./AllQuizzes";
import { shallow } from "enzyme";

test("renders without crashing", () => {
  const wrapper = shallow(<AllQuizzes />);
  expect(wrapper).toMatchSnapshot();
});
