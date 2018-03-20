import React, { Component } from "react";
import Delete from "./Delete";
import Option from "./Option";
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
} from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class OptionQuestion extends Component {
  render() {
    const {
        questionData,
        addOption,
        changeOption,
        toggleCorrectOption,
        changeQuestion,
        deleteOption
      } = this.props,
      { options, id, question } = questionData;

    return (
      <div className="optionQuestion">
        <input
          placeholder="Question"
          value={question}
          onChange={e => changeQuestion(e, id)}
        />
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
        <Delete questionId={id} />
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
})(OptionQuestion);
