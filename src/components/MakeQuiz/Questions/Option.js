import React, { Component } from "react";
class Option extends Component {
  render() {
    const { id, val, change, checked, toggleCorrectOption } = this.props;
    return (
      <div key={id}>
        <input value={val} onChange={change} />
        <label htmlFor={id}>Right answer?</label>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onClick={toggleCorrectOption}
        />
      </div>
    );
  }
}

export default Option;
