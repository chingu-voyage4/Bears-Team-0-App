import React, { Component } from "react";
import Option from "../components/Option";
import MultipleChoiceOption from "./MultipleChoiceOption";

export default class FillMultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.optionClickHandler = this.optionClickHandler.bind(this);
  }
  optionClickHandler(optionText, optionId) {
    console.log(optionText, optionId);
  }
  render() {
    const { options, question } = this.props,
      styles = {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      headerStyle = {
        width: "100%",
        textAlign: "center",
        margin: "20px auto 20px auto",
        fontWeight: "lighter",
        fontFamily: "Helvetica"
      },
      multipleChoice = {
        width: "400px"
      };
    return (
      <div style={styles}>
        <div style={multipleChoice}>
          <h1 style={headerStyle}>{question}</h1>
          {options.map(option => {
            return (
              <MultipleChoiceOption
                text={option.text}
                key={option.id}
                id={option.id}
                handleClick={this.optionClickHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
