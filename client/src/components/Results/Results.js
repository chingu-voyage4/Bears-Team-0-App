import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateQuizResults } from '../../actions/quizzes';

class Results extends Component {
  calculateScore = (questions, answers) => {
    let score = 0;
    if (questions.length === 0 || answers.length === 0) {
      return score;
    }
    const getQuestion = i => questions[i];
    const getAnswer = i => answers[i];

    const equal = (question, answer) => {
      if (
        question.format === 'multiple choice' ||
        question.format === 'dropdown'
      ) {
        const correctOption = question.options.filter(e => e.correct)[0].val;
        const selectedOption = answer.answer;
        return correctOption === selectedOption;
      } else if (question.format === 'true false') {
        return question.isTrue === answer.answer;
      }
      return false;
    };
    for (var i = 0; i < questions.length; i++) {
      score = equal(getQuestion(i), getAnswer(i)) ? score + 1 : score;
    }
    return score;
  };

  updateQuiz(numberOfQuestions, numberCorrect) {
    if (this.props.takeQuizzes.quiz._id) {
      const { quizzesTaken, resultAvg } = this.props.takeQuizzes.quiz;
      const updatedQuiz = { ...this.props.takeQuizzes.quiz };
      updatedQuiz.quizzesTaken = quizzesTaken + 1;
      updatedQuiz.resultAvg =
        (resultAvg * quizzesTaken + numberCorrect / numberOfQuestions) /
        (quizzesTaken + 1);
      this.props.updateQuizResults(
        this.props.takeQuizzes.quiz._id,
        updatedQuiz
      );
    }
  }

  render() {
    const { user } = this.props;
    const { questions, answers, quiz } = this.props.takeQuizzes;
    console.log(questions, answers);
    const quizTaken =
      answers.length === questions.length && answers.length !== 0;
    let numberOfQuestions = questions.length;
    if (quiz) {
      return (
        <section className="results-page">
          <h1>
            Number Correct: {this.calculateScore(questions, answers) || 0} out
            of {numberOfQuestions || 0}
          </h1>
          <section className="links-row">
            <Link className="results-links" to={`/takequiz/${quiz._id}`}>
              Retake Test?
            </Link>
            {user.currentUser !== '' ? (
              <Link className="results-links" to="/dashboard">
                Go To Your Dashboard
              </Link>
            ) : (
              <Link className="results-links" to="/">
                Go To Home Page
              </Link>
            )}
          </section>
        </section>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

function mapStateToProps({ takeQuizzes, user }) {
  return { takeQuizzes, user };
}

export default connect(mapStateToProps, { updateQuizResults })(Results);
