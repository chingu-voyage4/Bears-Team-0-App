import React, { Component } from "react";
import Option from "./Option";
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion
} from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  render() {
    const {
      questionData,
      addOption,
      changeOption,
      toggleCorrectOption,
      changeQuestion
    } = this.props;
    const { options, id } = questionData;
    return (
      <div>
        {/*<code style={{ display: "block" }}>{JSON.stringify(questionData)}</code>*/}
        <input placeholder="Question" onChange={changeQuestion} />
        <button onClick={() => addOption(id)}>Add Option</button>
        {options.map(option => (
          <Option
            key={option.id}
            change={e => changeOption(id, option.id, e)}
            toggleCorrectOption={() => toggleCorrectOption(id, option.id)}
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
  changeQuestion
})(MultipleChoice);
