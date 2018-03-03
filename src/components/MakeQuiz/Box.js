import React, { Component } from "react";
import { DragSource } from "react-dnd";

export class Box extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          height: "30px",
          background: "red",
          width: "90px",
          color: "black",
          fontWeight: "bold"
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`); // eslint-disable-line no-alert
    }
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}
const Types = {
  CARD: "card"
};
export class DecoratedBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { text } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(<div style={{ ...style, opacity }}>{text}</div>);
  }
}
export default DragSource(Types.CARD, boxSource, collect)(DecoratedBox);
