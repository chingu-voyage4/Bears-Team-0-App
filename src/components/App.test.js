import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import App from "./App";

const app = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
