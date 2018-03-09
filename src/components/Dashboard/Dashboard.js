import React, { Component } from "react";
import { connect } from "react-redux";
import QuizSection from "./QuizSection";
import QuizStart from "./QuizStart";
import { fetchAllQuizzes, fetchYourQuizzes } from "../../actions/quizzes";

export class Dashboard extends Component {
  render() {
    return (
      <div className="all-quizzes">
        <section className="all-quizzes-left">
          <QuizStart />
        </section>
        <section className="all-quizzes-right">
          <QuizSection
            headingText="Your Quizzes"
            quizzes={this.props.yourQuizzes}
            getData={this.props.fetchYourQuizzes}
            wrap={false}
            mainColor="secondary"
          />
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
)(Dashboard);
