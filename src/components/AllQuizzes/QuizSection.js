import React, { Component } from "react";
import Quiz from "./Quiz";
import { connect } from "react-redux";

class QuizSection extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headingText}</h1>
        {this.props.quizzes.map(e => (
          <Quiz key={e.id} title={e.title} likes={e.likes} body={e.body} />
        ))}
      </div>
    );
  }
}

export default connect(state => ({}), dispatch => ({}))(QuizSection);
