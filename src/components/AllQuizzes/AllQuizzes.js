import React, { Component } from "react";
import QuizSection from "./QuizSection";
import { connect } from "react-redux";

class AllQuizzes extends Component {
  render() {
    return (
      <div className="AllQuizzes">
        <QuizSection
          headingText="Your Quizzes"
          quizzes={this.props.yourQuizzes}
        />
        <QuizSection
          headingText="Popular Quizzes"
          quizzes={this.props.popularQuizzes}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    console.log("state is: ", state);
    return {
      popularQuizzes: state.allQuizzes.popularQuizzes,
      yourQuizzes: state.allQuizzes.yourQuizzes
    };
  },
  dispatch => ({})
)(AllQuizzes);
