import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delete from './Delete';
import Option from './Option';
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
} from '../../../actions/multipleChoice';

class OptionQuestion extends Component {
  render() {
    const {
      questionData,
      addOption,
      changeOption,
      toggleCorrectOption,
      changeQuestion,
      deleteOption
    } = this.props;
    const { options, id, question } = questionData;

    return (
      <div className="option-question">
        <input
          placeholder="Question"
          value={question}
          onChange={e => changeQuestion(e, id)}
        />
        <button
          className="option-button"
          onClick={() => {
            if (options.length < 4) {
              addOption(id);
            }
          }}
        >
          Add Option
        </button>
        <Delete questionId={id} className="delete-button" />
        {options
          ? options.map(option => (
              <Option
                key={option.id}
                change={e => changeOption(id, option.id, e)}
                toggleCorrectOption={() => {
                  toggleCorrectOption(id, option.id);
                }}
                deleteOption={() => deleteOption(id, option.id)}
                questionId={id}
                id={option.id}
                val={option.val}
                checked={option.correct}
              />
            ))
          : null}
      </div>
    );
  }
}

export default connect(null, {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
})(OptionQuestion);
