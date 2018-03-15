import React, { Component } from "react";
import QuizSection from "./QuizSection";
import QuizStart from "./QuizStart";
import { fetchAllQuizzes, fetchYourQuizzes } from "../../actions/quizzes";
import { connect } from "react-redux";

export class AllQuizzes extends Component {
  render() {
    return (
      <div className="all-quizzes">
        <section className="all-quizzes-left">
          {/* manages creation of title and description for new quiz */}
          <QuizStart />
        </section>
        <section className="all-quizzes-right">
          {/* this component shows your quizzes */}
          <QuizSection
            headingText="Your Quizzes"
            quizzes={this.props.yourQuizzes}
            getData={this.props.fetchYourQuizzes}
            wrap={false}
            mainColor="secondary"
          />
          {/* this component shows popular quizzes made by others */}
          <QuizSection
            headingText="Popular Quizzes"
            quizzes={this.props.popularQuizzes}
            getData={this.props.fetchAllQuizzes}
            wrap={true}
            mainColor="tertiary"
          />
        </section>
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
