import React, { Component } from "react";
import FillTrueFalse from "../FillTrueFalse";
import { fetchQuiz } from "../../actions/takeQuiz.js";
import { connect } from "react-redux";
// component allows client to take a quiz

class TakeQuiz extends Component {
  constructor(props) {
    super(props);
    console.log("props are: ", props);
  }

  componentWillMount() {
    // dispatch action to fetch quiz
    const { fetchQuiz, match: { params: { id } } } = this.props;
    console.log(id, "is props.match");
    fetchQuiz(id);
  }

  renderSwitch(questionObj) {
    const {
      question: questionStr,
      answer: answer,
      type: questionType
    } = questionObj;
    switch (questionType) {
      case "true false":
        return <FillTrueFalse question={questionStr} />;
      case "multiple choice":
        return <p>Multiple Choice</p>;
      case "dropdown":
        return <p>Dropdown</p>;
    }
  }

  render() {
    const { currentQuestion } = this.props;
    return (
      <div>
        <h1>Take Quiz</h1>
        <code>{JSON.stringify(this.props.currentQuestion)}</code>
        <code>
          {JSON.stringify(
            this.props.currentQuestion ? this.props.currentQuestion.type : ""
          )}
        </code>
        {this.props.currentQuestion
          ? this.renderSwitch(this.props.currentQuestion)
          : null}
      </div>
    );
  }
}

export default connect(
  state => {
    console.log("state.takeQuizzes is: ", state.takeQuizzes);
    const stateSlice = state.takeQuizzes;
    return {
      questions: stateSlice.questions,
      currentQuestion: stateSlice
        ? stateSlice.questions[stateSlice.questionCursor]
        : null
    };
  },
  { fetchQuiz }
)(TakeQuiz);
