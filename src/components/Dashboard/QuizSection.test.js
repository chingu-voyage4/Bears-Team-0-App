import React from "react";
import ReactDOM from "react-dom";
import QuizSection from "./QuizSection";
import Quiz from "./Quiz";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("QuizSection", () => {
  it("renders with appropriate props", () => {
    const props = {
      getData: new Function(),
      quizzes: [
        { title: "a title", body: "a body", id: 1 },
        { title: "another title", body: "another body", id: 2 }
      ]
    };
    const rendered = renderer.create(<QuizSection {...props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("requests data", () => {
    const dataGetter = jest.fn();
    const props = {
      getData: dataGetter
    };

    expect(dataGetter.mock.calls.length).toBe(0);

    renderer.create(<QuizSection {...props} />);

    expect(dataGetter.mock.calls.length).toBe(1);
  });
});
