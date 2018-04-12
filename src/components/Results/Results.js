import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    const { questions, answers } = this.props;
    const resultsStyle = {
      position: 'absolute',
      top: '64px'
    };
    const quizTaken = answers.length === questions.length;
    let numberCorrect;
    let numberOfQuestions;
    if (quizTaken) {
      numberCorrect = questions.reduce((numCorrect, question, index) => {
        return answers[index].answer ===
          question.options.filter(e => e.correct)[0].val
          ? numCorrect + 1
          : numCorrect;
      }, 0);
      numberOfQuestions = questions.length;
    }
    return (
      <div style={resultsStyle}>
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
                  const correctAnswer = question.options.filter(
                    e => e.correct
                  )[0].val;
                  return (
                    <tr>
                      <td>{givenQuestion}</td>
                      <td>{yourAnswer}</td>
                      <td>{correctAnswer}</td>
                    </tr>
                  );
                })
              : `Quiz Not taken yet!`}
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

export default connect(state => {
  return {
    questions: state.takeQuizzes.questions,
    answers: state.takeQuizzes.answers
  };
}, {})(Results);
