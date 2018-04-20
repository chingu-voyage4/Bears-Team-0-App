import React, { Component } from 'react';

export default class TrueFalseOption extends Component {
  render() {
    const { text, value, handleClick } = this.props;
    return (
      <button onClick={() => handleClick(value)} className="tf-option">
        {text}
      </button>
    );
  }
}
