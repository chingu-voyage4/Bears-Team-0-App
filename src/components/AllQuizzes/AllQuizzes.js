import React, { Component } from "react";
import PropTypes from "prop-types";
import QuizSection from "./QuizSection";
import QuizStart from "./QuizStart";
import { fetchAllQuizzes, fetchYourQuizzes } from "../../actions/quizzes";
import { connect } from "react-redux";

export class AllQuizzes extends Component {
  render() {
    return (
      <div className="AllQuizzes">
        <QuizStart />
        <QuizSection
          headingText="Your Quizzes"
          quizzes={this.props.yourQuizzes}
          getData={this.props.fetchYourQuizzes}
        />
        <QuizSection
          headingText="Popular Quizzes"
          quizzes={this.props.popularQuizzes}
          getData={this.props.fetchAllQuizzes}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      popularQuizzes: state.allQuizzes.popularQuizzes,
      yourQuizzes: state.allQuizzes.yourQuizzes
    };
  },
  {
    fetchAllQuizzes: fetchAllQuizzes,
    fetchYourQuizzes: fetchYourQuizzes
  }
)(AllQuizzes);
