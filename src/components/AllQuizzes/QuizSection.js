import React, { Component } from "react";
import Quiz from "./Quiz";

class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="quiz-section">
        <h1>{this.props.headingText}</h1>
        {this.props.quizzes.map(e => (
          <Quiz key={e.id} title={e.title} likes={e.likes} body={e.body} />
        ))}
      </div>
    );
  }
}

export default QuizSection;
