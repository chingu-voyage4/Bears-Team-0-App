import React, { Component } from "react";

export default class TrueFalseOption extends Component {
  render() {
    const { text, value, handleClick } = this.props,
      styles = {
        backgroundColor: "#55c0ed",
        color: "#fff",
        fontSize: "15px",
        height: "60px",
        width: "160px",
        margin: "20px",
        padding: "0 20px",
        fontWeight: "bolder",
        border: "0",
        borderRadius: "2px"
      };
    return (
      <button onClick={() => handleClick(value)} style={styles}>
        {text}
      </button>
    );
  }
}
