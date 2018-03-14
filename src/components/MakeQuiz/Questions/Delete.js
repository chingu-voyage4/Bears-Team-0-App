import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteQuestion } from "../../../actions/trueFalse";

class Delete extends Component {
  render() {
    const { questionId, deleteQuestion } = this.props;
    return (
      <button
        onClick={e => {
          e.preventDefault();
          deleteQuestion(questionId);
        }}
      >
        Delete
      </button>
    );
  }
}
export default connect(() => ({}), {
  deleteQuestion
})(Delete);
