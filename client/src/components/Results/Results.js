import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  calculateScore = (questions, answers) => {
    let score = 0;
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].format === 'true false') {
        score = questions[i].isTrue === answers[i].answer ? score + 1 : score;
      } else {
        const question = questions[i];
        const correctOption = question.options.filter(
          option => option.correct
        )[0];
        const correctValue = correctOption.val;
        const givenAnswer = answers[i].answer;
        score = correctValue === givenAnswer ? score + 1 : score;
      }
    }
    return score;
  };
  render() {
    const { questions, answers } = this.props;
    return (
      <div style={{ marginTop: '60px' }}>
        <h1>Number correct: {this.calculateScore(questions, answers)}</h1>
        <h2>total questions: {questions.length}</h2>
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
