import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FillTrueFalse from '../FillTrueFalse';
import { fetchQuiz } from '../../actions/takeQuiz';

// given a JSON object representation of a question,
// this function will render the appropriate component
function renderSwitch(questionObj) {
  const { question: questionStr, type: questionType } = questionObj;
  switch (questionType) {
    case 'true false':
      return <FillTrueFalse question={questionStr} />;
    case 'multiple choice':
      return <p>Multiple Choice</p>;
    case 'dropdown':
      return <p>Dropdown</p>;
    default:
      return null;
  }
}

// component allows client to take a quiz
class TakeQuiz extends Component {
  componentWillMount() {
    // dispatch action to fetch quiz
    const { fetchQuiz, match: { params: { id } } } = this.props;
    fetchQuiz(id);
  }

  render() {
    const { currentQuestion } = this.props;
    return (
      <div>
        <h1>Take Quiz</h1>
        {currentQuestion ? renderSwitch(currentQuestion) : null}
      </div>
    );
  }
}

TakeQuiz.defaultProps = {
  currentQuestion: null,
};

TakeQuiz.propTypes = {
  currentQuestion: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.bool.isRequired,
  }),
  fetchQuiz: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: Number,
    }),
  }).isRequired,
};

export default connect(
  (state) => {
    const stateSlice = state.takeQuizzes;
    return {
      questions: stateSlice.questions,
      currentQuestion: stateSlice ? stateSlice.questions[stateSlice.questionCursor] : null,
    };
  },
  { fetchQuiz },
)(TakeQuiz);
