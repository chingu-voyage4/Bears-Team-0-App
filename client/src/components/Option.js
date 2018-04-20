import React, { Component } from 'react';

export default class Option extends Component {
  render() {
    const { text, handleClick, id } = this.props;
    return (
      <button onClick={handleClick} className="option-main">
        {text}
      </button>
    );
  }
}
