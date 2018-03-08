import React, { Component } from "react";
class Option extends Component {
  render() {
    const { id, val, change } = this.props;
    return (
      <div key={id}>
        <input value={val} onChange={change} />
        <label htmlFor={id}>Right answer?</label>
        <input id={id} type="checkbox" />
      </div>
    );
  }
}

export default Option;
