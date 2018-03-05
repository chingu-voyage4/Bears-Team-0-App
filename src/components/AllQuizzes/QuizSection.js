import React, { Component } from "react";
import Quiz from "./Quiz";

export class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    const {headingText, quizzes, mainColor, wrap} = this.props;
    return (
      <div className="quiz-section">
        <h1 className={`quiz-section-heading ${mainColor}`}>{headingText}</h1>
        <section className={wrap ? "quiz-section-body-wrap" : "quiz-section-body"}>
        {quizzes
          ? quizzes.map(e => (
              <Quiz key={e.id} title={e.title} likes={e.likes} body={e.body} mainColor={mainColor} />
            ))
          : null}
          </section>
      </div>
    );
  }
}

export default QuizSection;
