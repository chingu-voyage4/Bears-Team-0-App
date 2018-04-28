import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendOption, finishQuiz } from '../actions/takeQuiz';
import MultipleChoiceOption from './MultipleChoiceOption';

class FillTrueFalse extends Component {
  handleClick = (option, optionId) => {
    const { sendOption, finishQuiz, almostComplete, history } = this.props;
    this.setState(
      {
        options: [true, false].map(
          option =>
            option.id === optionId
              ? { ...option, selected: true, chooseable: false }
              : { ...option, chooseable: false }
        )
      },
      () => {
        setTimeout(() => {
          sendOption(option);
          if (almostComplete) {
            finishQuiz();
            history.push('/results');
          }
        }, 1000);
      }
    );
  };
  render() {
    const { question } = this.props;

    return (
      <div className="fill-tf">
        <h1>{question.question}</h1>
        <MultipleChoiceOption
          text="True"
          handleClick={() => this.handleClick(true, question.id)}
          id={question.id}
          selected={false}
          chooseable={false}
        />
        <MultipleChoiceOption
          text="False"
          handleClick={() => this.handleClick(false, question.id)}
          id={question.id}
          selected={false}
          chooseable={false}
        />
      </div>
    );
  }
}

export default connect(() => ({}), { sendOption, finishQuiz })(
  withRouter(FillTrueFalse)
);
