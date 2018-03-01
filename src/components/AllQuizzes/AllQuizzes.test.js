import React from "react";
import ReactDOM from "react-dom";
import { AllQuizzes } from "./AllQuizzes";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("AllQuizzes", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<AllQuizzes />);
    expect(wrapper).toMatchSnapshot();
  });
});
