import React, { Component } from "react";
import { changeQuestion } from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class TrueFalse extends Component {
  render() {
    const { question, id, isTrue } = this.props.questionData;
    console.log(this.props);
    return (
      <form>
        <input type="text" onChange={event => changeQuestion(event, id)} />
        <button>Delete</button>
        <label htmlFor={id + "true"}>True</label>
        <input
          type="radio"
          id={id + "true"}
          name={id}
          value="true"
          checked={isTrue}
          onChange={() => {}}
        />
        <label htmlFor={id + "false"}>False</label>
        <input
          type="radio"
          id={id + "false"}
          name={id}
          value="false"
          checked={!isTrue}
          onChange={() => {}}
        />
      </form>
    );
  }
}

export default connect(state => ({}), {
  changeQuestion
})(TrueFalse);
