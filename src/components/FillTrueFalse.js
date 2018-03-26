import React, { Component } from "react";
import TrueFalseOption from "./TrueFalseOption";

class FillTrueFalse extends Component {
  constructor(props) {
    super(props);
    this.optionClickHandler = this.optionClickHandler.bind(this);
  }
  optionClickHandler(value) {
    console.log(value);
  }
  render() {
    const { question } = this.props,
      styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      },
      h1Styles = {
        fontFamily: "Helvetica",
        fontWeight: "lighter",
        margin: "0 auto",
        textAlign: "center",
        width: "100%"
      },
      optionStyles = {
        display: "block"
      };
    return (
      <div style={styles}>
        <h1 style={h1Styles}>{question}</h1>
        <TrueFalseOption
          text={"True"}
          value={true}
          handleClick={this.optionClickHandler}
        />
        <TrueFalseOption
          text={"False"}
          value={false}
          handleClick={this.optionClickHandler}
        />
      </div>
    );
  }
}

export default FillTrueFalse;
