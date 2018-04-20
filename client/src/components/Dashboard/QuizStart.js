import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  changeTitle,
  changeDescription,
  submitQuizStart,
} from '../../actions/quizzes';

// this component collects the title and description for a started quiz
class QuizStart extends Component {
  render() {
    const {
      submit, title, description, history 
    } = this.props;
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
          {/* Pass history object via props into 
              button's click handler.  Allows for
              dynamic routing to makeQuiz page */}
          <button type="button" onClick={() => submit(history)}>
            Make A Quiz
          </button>
        </div>
      </form>
    );
  }
}
// Wrap connected QuizStart component inside
// higher order "withRouter" component.
// Allows dynamic routing with react router.
export default withRouter(connect(
  state => ({
    title: state.titleAndDescription.title,
    description: state.titleAndDescription.description,
  }),
  dispatch => ({
    changeTitle: e => dispatch(changeTitle(e)),
    changeDescription: e => dispatch(changeDescription(e)),
    submit: (history) => {
      dispatch(submitQuizStart());
      history.push('/makeQuiz');
    },
  }),
)(QuizStart));
