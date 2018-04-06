import React, { Component } from "react";
import Quiz from "./Quiz";

// represents a collection of quizzes
export class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    const { headingText, quizzes, mainColor, wrap } = this.props;
    return (
      <div className="quiz-section">
        <h1 className={`quiz-section-heading ${mainColor}`}>{headingText}</h1>
        <section
          className={wrap ? "quiz-section-body-wrap" : "quiz-section-body"}
        >
          {/* display quizzes received through props*/}
          {quizzes
            ? quizzes.map(quiz => (
                <Quiz
                  key={quiz.id}
                  id={quiz.id}
                  title={quiz.title}
                  favorites={quiz.favorites}
                  body={quiz.description}
                  mainColor={mainColor}
                />
              ))
            : null}
        </section>
      </div>
    );
  }
}

export default QuizSection;
