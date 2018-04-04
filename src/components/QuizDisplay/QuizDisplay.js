import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions/quiz";

class QuizDisplay extends Component {
  state = {  }

  componentDidMount(){
    this.props.fetchSpecificQuiz(this.props.match.params.id);
    this.props.fetchAllQuizzes();
  }

  renderQuestions(questions) {
    console.log(questions);
    // TODO: render and style once questions are properly loaded.
    // Current dummy data isn't saved correctly.
  }

  render() {
    if(!!this.props.currentQuiz) {
      const {title, author, description, questions} = this.props.currentQuiz.quiz;
      return (
        <div className="quiz-display">
          <h1>{title} by {author}</h1>
          <h3>{description}</h3>
          {this.renderQuestions(questions)}
        </div>
      );
    } else {
      return "Loading";
    }
  }
}

function mapStateToProps({currentQuiz, allQuizzes}){
  return {currentQuiz, allQuizzes};
}

export default connect(mapStateToProps,actions)(QuizDisplay);