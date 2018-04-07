import React, { Component } from "react";
import OptionQuestion from "./OptionQuestion";

class MultipleChoice extends Component {
  render() {
    return <OptionQuestion questionData={this.props.questionData} />;
  }
}

export default MultipleChoice;
