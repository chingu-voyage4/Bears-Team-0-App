import React, { Component } from 'react';
import { connect } from 'react-redux';
import FillTrueFalse from '../FillTrueFalse';
import FillDropdown from '../FillDropdown';
import FillMultipleChoice from '../FillMultipleChoice';
import * as actions from '../../actions/takeQuiz';
// component allows client to take a quiz

class TakeQuiz extends Component {
  componentDidMount() {
    this.props.fetchSpecificQuiz(this.props.match.params.id);
  }

  renderQuestion(question, finishQuiz) {
    switch (question.format) {
      case 'true false':
        return (
          <FillTrueFalse
            key={question.id}
            question={question}
            options={[true, false]}
            almostComplete={finishQuiz}
          />
        );
      case 'multiple choice':
        return (
          <FillMultipleChoice
            key={question.id}
            question={question.question}
            options={question.options}
            almostComplete={finishQuiz}
          />
        );
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
    if (this.props.takeQuizzes) {
      const {
        title,
        description,
        questions,
        questionCursor
      } = this.props.takeQuizzes;

      const currentQuestion = questions[questionCursor];

      const finishQuiz = questionCursor === questions.length - 1;
      return (
        <div className="quiz-display">
          <section className="quiz-header">
            <h1>{title}</h1>
            <h3>{description}</h3>
          </section>
          <section className="question-display">
            {currentQuestion
              ? this.renderQuestion(currentQuestion, finishQuiz)
              : null}
          </section>
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
