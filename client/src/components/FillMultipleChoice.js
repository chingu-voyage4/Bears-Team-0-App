import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MultipleChoiceOption from './MultipleChoiceOption';
import { sendOption } from '../actions/takeQuiz';

class FillMultipleChoice extends Component {
  constructor(props) {
    super(props);
  }

  optionClickHandler = (optionText, optionId) => {
    const { sendOption, history, almostComplete } = this.props;
    sendOption(optionText);
    if (almostComplete) {
      history.push('/results');
    }
    console.log(optionText, optionId);
  };
  render() {
    const { options, question } = this.props;
    console.log(this.props);
    return (
      <div className="fill-mc">
        <div className="mc-option">
          <h1 className="mc-header">{question}</h1>
          {options.map(option => {
            return (
              <MultipleChoiceOption
                text={option.val}
                key={option.id}
                id={option.id}
                handleClick={this.optionClickHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  sendOption
})(withRouter(FillMultipleChoice));
