import React, { Component } from 'react';
import MultipleChoiceOption from './MultipleChoiceOption';

export default class FillMultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.optionClickHandler = this.optionClickHandler.bind(this);
  }
  optionClickHandler(optionText, optionId) {
    console.log(optionText, optionId);
  }
  render() {
    const { options, question } = this.props;
    return (
      <div className="fill-mc">
        <div className="mc-option">
          <h1 className="mc-header">{question}</h1>
          {options.map((option) => {
            return (
              <MultipleChoiceOption
                text={option.text}
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
