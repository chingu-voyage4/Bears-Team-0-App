import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import types from './types';
import {
  addMultipleChoice,
  addTrueFalse,
  addDropdown,
} from '../../actions/makequiz';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      switch (props.name) {
        case 'Multiple Choice':
          props.addMultipleChoice();
          break;
        case 'TrueFalse':
          props.addTrueFalse();
          break;
        case 'Dropdown':
          props.addDropdown();
          break;
        default:
          break;
      }
    }
  },
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),
  };
}
export class DecoratedBox extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { text } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(<div className="decorated-box" style={{ opacity: { opacity } }}>{text}</div>);
  }
}
export default connect(null, {
  addMultipleChoice,
  addTrueFalse,
  addDropdown,
})(DragSource(types.BOX, boxSource, collect)(DecoratedBox));
