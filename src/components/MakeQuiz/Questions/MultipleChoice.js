import React, { Component } from "react";
import Delete from "./Delete";
import Option from "./Option";
import OptionQuestion from "./OptionQuestion";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  render() {
    return <OptionQuestion questionData={this.props.questionData} />;
  }
}

export default MultipleChoice;
