import React, { Component } from "react";
import {connect} from "react-redux";
import {updateQuiz} from "../../actions/quizzes";
import Quiz from "./Quiz";

// represents a collection of quizzes
export class QuizSection extends Component {
  componentWillMount() {
    this.props.getData();
  }

  async addOneToFavs(quiz){
    let updatedQuiz = {...quiz};
    updatedQuiz.favorites = quiz.favorites + 1;
    await this.props.updateQuiz(quiz._id, updatedQuiz);
    await this.props.getData();
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
                  key={quiz._id}
                  id={quiz._id}
                  title={quiz.title}
                  favorites={quiz.favorites}
                  body={quiz.description}
                  mainColor={mainColor}
                  updateQuiz={() => this.addOneToFavs(quiz)}
                />
              ))
            : null}
        </section>
      </div>
    );
  }
}

export default connect(null, {updateQuiz})(QuizSection);
