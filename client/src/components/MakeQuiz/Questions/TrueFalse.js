import React, { Component } from "react";
import Delete from "./Delete";
import { changeQuestion } from "../../../actions/multipleChoice";
import { toggleTrueFalse } from "../../../actions/trueFalse";
import { connect } from "react-redux";

class TrueFalse extends Component {
  render() {
    const { id, isTrue, question } = this.props.questionData,
      { changeQuestion, toggleTrueFalse } = this.props;
    return (
      <form>
        <input
          type="text"
          value={question}
          onChange={event => changeQuestion(event, id)}
        />
        <Delete questionId={id} />
        <label htmlFor={id + "true"}>True</label>
        <input
          type="radio"
          id={id + "true"}
          name={id}
          value="true"
          checked={isTrue}
          onChange={() => toggleTrueFalse(id)}
        />
        <label htmlFor={id + "false"}>False</label>
        <input
          type="radio"
          id={id + "false"}
          name={id}
          value="false"
          checked={!isTrue}
          onChange={() => toggleTrueFalse(id)}
        />
      </form>
    );
  }
}

export default connect(state => ({}), {
  changeQuestion,
  toggleTrueFalse
})(TrueFalse);
