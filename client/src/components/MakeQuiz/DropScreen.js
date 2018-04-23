import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { submitQuiz } from '../../actions/makequiz';
import MultipleChoice from './Questions/MultipleChoice';
import TrueFalse from './Questions/TrueFalse';
import Dropdown from './Questions/Dropdown';
import types from './types';

const spec = {
  drop() {
    return { name: 'builder' };
  },
};
const collect = (connect, monitor) => {
  return {
    hovered: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  };
};

class DropScreen extends Component {
  render() {
    const {
      title,
      description,
      questions,
      hovered,
      connectDropTarget,
      submitQuiz,
      history,
    } = this.props;

    return connectDropTarget(
      <div className={hovered ? 'drop-screen hovered' : 'drop-screen'}>
        <h1 className={hovered ? 'ds-title hovered' : 'ds-title'}>{title}</h1>
        <h2 className={hovered ? 'ds-desc hovered' : 'ds-desc'}>{description}</h2>
        {questions.length === 0 ? (
          <p className={hovered ? 'ds-instruction hovered' : 'ds-instruction'}>Drag a new question here!</p>
        ) : null}
        <div className={hovered ? 'ds-questions hovered' : 'ds-questions'}>
          {questions.map((question) => {
            switch (question.format) {
              case 'multiple choice':
                return (
                  <MultipleChoice key={question.id} questionData={question} />
                );
              case 'true false':
                return <TrueFalse key={question.id} questionData={question} />;
              case 'dropdown':
                return <Dropdown key={question.id} questionData={question} />;
              default:
                return null;
            }
          })}
          {questions.length > 0 ? (
            <button
              className="submit-button"
              onClick={(event) => {
                event.preventDefault();
                submitQuiz({ title, description, questions });
                history.push('/dashboard');
              }}
            >
              Submit Quiz
            </button>
          ) : null}
        </div>
      </div>);
  }
}
export default connect(
  state => ({
    questions: state.makeQuizzes.questions,
    title: state.titleAndDescription.title,
    description: state.titleAndDescription.description,
  }),
  { submitQuiz },
)(DropTarget(types.BOX, spec, collect)(withRouter(DropScreen)));
