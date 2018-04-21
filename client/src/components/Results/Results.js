import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuiz } from '../../actions/quizzes';

class Results extends Component {

  updateQuizResults(numberOfQuestions, numberCorrect) {
    if (this.props.takeQuizzes.quiz._id) {
      const { quizzesTaken, resultAvg } = this.props.takeQuizzes.quiz;
      const updatedQuiz = { ...this.props.takeQuizzes.quiz };
      updatedQuiz.quizzesTaken = quizzesTaken + 1;
      updatedQuiz.resultAvg = ((resultAvg * quizzesTaken) +
        (numberCorrect / numberOfQuestions)) / (quizzesTaken + 1);
      this.props.updateQuiz(this.props.takeQuizzes.quiz._id, updatedQuiz);
    }
  }

  render() {
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
      this.updateQuizResults(numberOfQuestions, numberCorrect);
    }
    return (
      <div className="results">
        <table>
          {quizTaken ? (
            <thead>
              <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Survey says:</th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {quizTaken
              ? questions.map((question, index) => {
                  const givenQuestion = question.question;
                  const yourAnswer = answers[index].answer;
                  const correctAnswer = question.options.filter(e => e.correct)[0].val;
                  return (
                    <tr key={index}>
                      <td>{givenQuestion}</td>
                      <td>{yourAnswer}</td>
                      <td>{correctAnswer}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <p>
          {quizTaken
            ? `Number correct: ${numberCorrect} Out of ${numberOfQuestions}`
            : null}
        </p>
      </div>
    );
  }
}

function mapStateToProps({ takeQuizzes }) {
  return { takeQuizzes };
}

export default connect(mapStateToProps, { updateQuiz })(Results);
