import React, { Component } from "react";
import Option from "./Option";
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
} from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  render() {
    const {
        questionData,
        addOption,
        changeOption,
        toggleCorrectOption,
        changeQuestion,
        deleteOption
      } = this.props,
      { options, id } = questionData;

    return (
      <div className="multipleChoice">
        <input placeholder="Question" onChange={e => changeQuestion(e, id)} />
        <button onClick={() => addOption(id)}>Add Option</button>
        {options.map(option => (
          <Option
            key={option.id}
            change={e => changeOption(id, option.id, e)}
            toggleCorrectOption={() => toggleCorrectOption(id, option.id)}
            deleteOption={() => deleteOption(id, option.id)}
            questionId={id}
            id={option.id}
            val={option.val}
          />
        ))}
      </div>
    );
  }
}

export default connect(state => ({}), {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
})(MultipleChoice);
