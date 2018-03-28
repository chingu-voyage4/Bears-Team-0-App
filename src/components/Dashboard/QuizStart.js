import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  changeTitle,
  changeDescription,
  submitQuizStart
} from "../../actions/quizzes";
import { connect } from "react-redux";

// this component collects the title and description for a started quiz
class QuizStart extends Component {
  render() {
    const { submit, title, description, history } = this.props;
    return (
      <form className="quiz-start">
        <h1>Quiz Maker</h1>
        <div className="quiz-start-body">
          <label htmlFor="quiz-title">Quiz Title</label>
          <input
            id="quiz-title"
            value={title}
            onChange={this.props.changeTitle}
          />
          <label htmlFor="quiz-description">Description (Optional)</label>
          <textarea
            id="quiz-description"
            value={description}
            onChange={this.props.changeDescription}
          />
          <button type="button" onClick={() => submit(history)}>
            Make A Quiz
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      title: state.titleAndDescription.title,
      description: state.titleAndDescription.description
    }),
    dispatch => ({
      changeTitle: e => dispatch(changeTitle(e)),
      changeDescription: e => dispatch(changeDescription(e)),
      submit: history => {
        history.push("/makeQuiz");
        dispatch(submitQuizStart());
      }
    })
  )(QuizStart)
);
