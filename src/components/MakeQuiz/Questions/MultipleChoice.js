import React, { Component } from "react";
import { addOption } from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { questionData, addOption } = this.props;
    const { options, id } = questionData;
    return (
      <div>
        <code style={{ display: "block" }}>{JSON.stringify(questionData)}</code>
        <input placeholder="Question" />
        <button onClick={() => addOption(id)}>Add Option</button>
        {options.map(option => <p key={option.id}>{option.val}</p>)}
      </div>
    );
  }
}
export default connect(state => ({}), {
  addOption
})(MultipleChoice);
