import React, { Component } from "react";
import Delete from "./Delete";
import Option from "./Option";
import OptionQuestion from "./OptionQuestion";
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
} from "../../../actions/multipleChoice";
import { connect } from "react-redux";

class Dropdown extends Component {
  render() {
    return <OptionQuestion questionData={this.props.questionData} />;
  }
}

export default Dropdown;
