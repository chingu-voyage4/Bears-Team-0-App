import React, { Component } from "react";
import Quiz from "./Quiz";

export class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="quiz-section">
        <h1>{this.props.headingText}</h1>
        {this.props.quizzes
          ? this.props.quizzes.map(e => (
              <Quiz key={e.id} title={e.title} likes={e.likes} body={e.body} />
            ))
          : null}
      </div>
    );
  }
}

export default QuizSection;
