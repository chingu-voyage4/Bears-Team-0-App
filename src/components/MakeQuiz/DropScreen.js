import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import MultipleChoice from "./Questions/MultipleChoice";
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
  render() {
    const { questions, hovered, connectDropTarget } = this.props;
    return connectDropTarget(
      <div
        style={{
          color: "#fff",
          padding: "20px",
          backgroundColor: hovered ? "darkslategray" : "#c7c7c7",
          width: "50%",
          flexBasis: "auto"
        }}
      >
        <p>DropScreen</p>
        <div>
          {questions.map(question => {
            switch (question.format) {
              case "multiple choice":
                return (
                  <MultipleChoice key={question.id} questionData={question} />
                );
              default:
                return null;
            }
          })}
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
