import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';

// represents a collection of quizzes
export class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    const {
      headingText, quizzes, mainColor, wrap,
    } = this.props;
    return (
      <div className="quiz-section">
        <h1 className={`quiz-section-heading ${mainColor}`}>{headingText}</h1>
        <section className={wrap ? 'quiz-section-body-wrap' : 'quiz-section-body'}>
          {/* display quizzes received through props */}
          {quizzes
            ? quizzes
                .map(quiz => (
                  <Quiz
                    key={quiz.id}
                    id={quiz.id}
                    title={quiz.title}
                    likes={quiz.likes}
                    body={quiz.body}
                    mainColor={mainColor}
                  />
                ))
                .slice(0, 3)
            : null}
        </section>
      </div>
    );
  }
}

QuizSection.propTypes = {
  getData: PropTypes.func.isRequired,
  headingText: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  wrap: PropTypes.bool.isRequired,
  quizzes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuizSection;
