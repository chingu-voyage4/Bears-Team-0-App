import React, { Component } from "react";
import {
  changeTitle,
  changeDescription,
  submitQuizStart
} from "../../actions/quizzes";
import { connect } from "react-redux";

// this component collects the title and description for a started quiz
class QuizStart extends Component {
  render() {
    return (
      <form className="quiz-start">
        <h1>Quiz Maker</h1>
        <div className="quiz-start-body">
          <label htmlFor="quiz-title">Quiz Title</label>
          <input
            id="quiz-title"
            value={this.props.title}
            onChange={this.props.changeTitle}
          />
          <label htmlFor="quiz-description">Description (Optional)</label>
          <textarea
            id="quiz-description"
            value={this.props.description}
            onChange={this.props.changeDescription}
          />
          <button type="button" onClick={this.props.submit}>
            Make A Quiz
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  state => ({
    title: state.allQuizzes.newQuiz.title,
    description: state.allQuizzes.newQuiz.description
  }),
  dispatch => ({
    changeTitle: e => dispatch(changeTitle(e)),
    changeDescription: e => dispatch(changeDescription(e)),
    submit: () => dispatch(submitQuizStart())
  })
)(QuizStart);
