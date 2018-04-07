import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { shallow } from "enzyme";
import App from "./App";

const app = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
