import React from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "./Dashboard";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Dashboard", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
