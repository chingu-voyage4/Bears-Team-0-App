import React, { Component } from 'react';
import FillTrueFalse from '../FillTrueFalse';
import FillDropdown from '../FillDropdown';
import { connect } from 'react-redux';
import * as actions from '../../actions/takeQuiz';
// component allows client to take a quiz

class TakeQuiz extends Component {
  componentDidMount() {
    this.props.fetchSpecificQuiz(this.props.match.params.id);
  }

  renderQuestion(question, finishQuiz) {
    switch (question.format) {
      case 'true false':
        return <FillTrueFalse key={question.id} question={question} />;
      case 'multiple choice':
        return <p key={question.id}>Multiple Choice</p>;
      case 'dropdown':
        return (
          <FillDropdown
            key={question.id}
            question={question}
            format={question.format}
            options={question.options}
            almostComplete={finishQuiz}
          />
        );
      default:
        return null;
    }
  }

  render() {
    if (!!this.props.takeQuizzes) {
      const {
        title,
        description,
        questions,
        questionCursor
      } = this.props.takeQuizzes;

      const quizDisplayStyles = {
        position: 'absolute',
        top: '64px'
      };

      const currentQuestion = questions[questionCursor];

      const finishQuiz = questionCursor === questions.length - 1;
      return (
        <div className="quiz-display" style={quizDisplayStyles}>
          <h1>{title}</h1>
          <h3>{description}</h3>
          {currentQuestion
            ? this.renderQuestion(currentQuestion, finishQuiz)
            : null}
        </div>
      );
    } else {
      return 'Loading';
    }
  }
}

function mapStateToProps({ takeQuizzes }) {
  return { takeQuizzes };
}

export default connect(mapStateToProps, actions)(TakeQuiz);
