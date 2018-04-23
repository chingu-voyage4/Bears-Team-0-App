import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateQuizResults } from '../../actions/quizzes';

class Results extends Component {
  // Dirty stop to rerender after updating the quiz results
  // Not the best choice, but will work for now.
  shouldComponentUpdate() {
    return false;
  }

  updateQuiz(numberOfQuestions, numberCorrect) {
    if (this.props.takeQuizzes.quiz._id) {
      const { quizzesTaken, resultAvg } = this.props.takeQuizzes.quiz;
      const updatedQuiz = { ...this.props.takeQuizzes.quiz };
      updatedQuiz.quizzesTaken = quizzesTaken + 1;
      updatedQuiz.resultAvg = ((resultAvg * quizzesTaken) +
        (numberCorrect / numberOfQuestions)) / (quizzesTaken + 1);
      this.props.updateQuizResults(this.props.takeQuizzes.quiz._id, updatedQuiz);
    }
  }

  render() {
    const { user } = this.props;
    const { questions, answers, quiz } = this.props.takeQuizzes;
    const quizTaken = answers.length === questions.length && answers.length !== 0;
    let numberCorrect;
    let numberOfQuestions;
    if (quizTaken && quiz) {
      numberCorrect = questions.reduce((numCorrect, question, index) => {
        return answers[index].answer ===
          question.options.filter(e => e.correct)[0].val
          ? numCorrect + 1
          : numCorrect;
      }, 0);
      numberOfQuestions = questions.length;
    }
    if (quiz) {
      this.updateQuiz(numberOfQuestions, numberCorrect);
      return (
        <section className="results-page">
          <h1>Number Correct: {numberCorrect || 0} out of {numberOfQuestions || 0}</h1>
          <section className="links-row">
            <Link className="results-links" to={`/takequiz/${quiz._id}`}>Retake Test?</Link>
            {user.currentUser !== '' ? <Link className="results-links" to="/dashboard">Go To Your Dashboard</Link> : <Link className="results-links" to="/">Go To Home Page</Link>}
          </section>
        </section>
      );
    } else {
      return (
        <Redirect to="/" />
      );
    }
  }
}

function mapStateToProps({ takeQuizzes, user }) {
  return { takeQuizzes, user };
}

export default connect(mapStateToProps, { updateQuizResults })(Results);
