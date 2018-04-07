import React, { Component } from "react";
class Option extends Component {
  render() {
    const {
      id,
      val,
      change,
      checked,
      toggleCorrectOption,
      deleteOption
    } = this.props;
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
        <button onClick={deleteOption}>x</button>
      </div>
    );
  }
}

export default Option;
