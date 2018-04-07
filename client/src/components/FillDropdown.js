import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default class FillDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedText: null
    };
  }
  render() {
    const { options, question } = this.props,
      selectOptions = options.map(option => {
        const { text: value, text: label, id } = option;
        return { ...option, value: value, label: label };
      }),
      heading = {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Helvetica",
        fontWeight: "lighter"
      },
      selectStyle = {
        width: "500px",
        margin: "0 auto"
      };
    return (
      <div>
        <h1 style={heading}>{question}</h1>
        {this.state.selectedText ? (
          <h2 style={heading}>{this.state.selectedText}</h2>
        ) : (
          <Select
            style={selectStyle}
            question={question}
            options={selectOptions}
            onChange={e => {
              console.log("changing", e);
              this.setState({
                selectedText: e.value
              });
            }}
          />
        )}
      </div>
    );
  }
}
