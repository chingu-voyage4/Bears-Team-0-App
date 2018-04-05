import React, { Component } from "react";
import FillTrueFalse from "../FillTrueFalse";
import { connect } from "react-redux";
import * as actions from "../../actions/takeQuiz";
// component allows client to take a quiz

class TakeQuiz extends Component {

  componentDidMount(){
    this.props.fetchSpecificQuiz(this.props.match.params.id);
  }

  renderQuestion(question) {
    console.log(question)
    switch (question.format) {
      case "true false":
        return <FillTrueFalse key={question.id} question={question} />;
      case "multiple choice":
        return <p key={question.id}>Multiple Choice</p>;
      case "dropdown":
        return <p key={question.id}>Dropdown</p>;
      default:
        return null;
    }
  }

  render() {
    if(!!this.props.takeQuizzes) {
      const {title, description, questions} = this.props.takeQuizzes;
      return (
        <div className="quiz-display">
          <h1>{title}</h1>
          <h3>{description}</h3>
          {questions.map(question => { return this.renderQuestion(question) })}
        </div>
      );
    } else {
      return "Loading";
    }
  }
}

function mapStateToProps({takeQuizzes}){
  return {takeQuizzes};
}

export default connect(mapStateToProps, actions)(TakeQuiz);
