import React, { Component } from "react";
import DecoratedBox from "./Box";

export class DragScreen extends Component {
  render() {
    return (
      <div
        style={{
          color: "#c7c7c7",
          backgroundColor: "#fff",
          width: "50%",
          flexBasis: "auto"
        }}
      >
        <p>DragScreen</p>
        <DecoratedBox text="I'm a Box and I'm Draggable!" />
      </div>
    );
  }
}
