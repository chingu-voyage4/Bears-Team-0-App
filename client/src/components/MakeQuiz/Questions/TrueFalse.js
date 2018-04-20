import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delete from './Delete';
import { changeQuestion } from '../../../actions/multipleChoice';
import { toggleTrueFalse } from '../../../actions/trueFalse';

class TrueFalse extends Component {
  render() {
    const { id, isTrue, question } = this.props.questionData;
    const { changeQuestion, toggleTrueFalse } = this.props;
    return (
      <form className="tf-form">
        <input
          type="text"
          value={question}
          onChange={event => changeQuestion(event, id)}
        />
        <label htmlFor={`${id}true`}>True</label>
        <input
          type="radio"
          id={`${id}true`}
          name={id}
          value="true"
          checked={isTrue}
          onChange={() => toggleTrueFalse(id)}
        />
        <label htmlFor={`${id}false`}>False</label>
        <input
          type="radio"
          id={`${id}false`}
          name={id}
          value="false"
          checked={!isTrue}
          onChange={() => toggleTrueFalse(id)}
        />
        <Delete questionId={id} className="delete-button" />
      </form>
    );
  }
}

export default connect(null, {
  changeQuestion,
  toggleTrueFalse,
})(TrueFalse);
