import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../../actions/trueFalse';

class Delete extends Component {
  render() {
    const { questionId, deleteQuestion } = this.props;
    const buttonStyles = {
      width: '10%',
      color: '#215fe9',
      fontWeight: 'bolder',
      border: 0
    };
    return (
      <button
        onClick={e => {
          e.preventDefault();
          deleteQuestion(questionId);
        }}
        style={buttonStyles}
      >
        Delete
      </button>
    );
  }
}
export default connect(() => ({}), {
  deleteQuestion
})(Delete);
