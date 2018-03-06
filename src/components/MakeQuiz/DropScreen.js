import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import types from "./types";
const spec = {
    drop() {
      return { name: "builder" };
    }
  },
  collect = (connect, monitor) => {
    return {
      hovered: monitor.isOver(),
      connectDropTarget: connect.dropTarget()
    };
  };
class DropScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { questions, hovered, connectDropTarget } = this.props;
    console.log("questions are: ", questions);
    return connectDropTarget(
      <div
        style={{
          color: "#fff",
          backgroundColor: hovered ? "darkslategray" : "#c7c7c7",
          width: "50%",
          flexBasis: "auto"
        }}
      >
        <p>DropScreen</p>
        <div>
          {questions.map(question => <code>{JSON.stringify(question)}</code>)}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    questions: state.makeQuizzes.questions
  }),
  {}
)(DropTarget(types.BOX, spec, collect)(DropScreen));
