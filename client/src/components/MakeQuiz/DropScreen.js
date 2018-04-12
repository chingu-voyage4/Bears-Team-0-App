import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { submitQuiz } from '../../actions/makequiz';
import { DropTarget } from 'react-dnd';
import MultipleChoice from './Questions/MultipleChoice';
import TrueFalse from './Questions/TrueFalse';
import Dropdown from './Questions/Dropdown';
import { connect } from 'react-redux';
import types from './types';
const spec = {
    drop() {
      return { name: 'builder' };
    }
  },
  collect = (connect, monitor) => {
    return {
      hovered: monitor.isOver(),
      connectDropTarget: connect.dropTarget()
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
      history
    } = this.props;
    const styles = {
      title: {
        color: hovered ? '#fff' : 'black',
        marginTop: '0px',
        marginBottom: '0px',
        display: 'inline-block',
        marginRight: '5%'
      },
      description: {
        color: hovered ? '#fff' : 'black',
        display: 'inline-block',
        textDecoration: 'underline',
        fontWeight: 'lighter'
      },
      paragraph: {
        color: hovered ? '#fff' : 'black',
        fontWeight: 'bolder'
      },
      questions: {
        marginTop: '0px'
      }
    };
    return connectDropTarget(
      <div
        style={{
          color: '#fff',
          padding: '20px',
          backgroundColor: hovered ? 'darkslategray' : '#fff',
          letterSpacing: '0.05rem',
          borderLeft: '2px solid black',
          width: '70%',
          height: '100%',
          overflow: 'scroll',
          flexBasis: 'auto'
        }}
      >
        <h1 style={styles.title}>{title}</h1>
        <h2 style={styles.description}>{description}</h2>
        {questions.length === 0 ? (
          <p style={styles.paragraph}>Drag a new question here!</p>
        ) : null}
        <div style={styles.questions}>
          {questions.map(question => {
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
              onClick={event => {
                event.preventDefault();
                submitQuiz({ title, description, questions });
                history.push('/dashboard');
              }}
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    questions: state.makeQuizzes.questions,
    title: state.titleAndDescription.title,
    description: state.titleAndDescription.description
  }),
  { submitQuiz }
)(DropTarget(types.BOX, spec, collect)(withRouter(DropScreen)));
