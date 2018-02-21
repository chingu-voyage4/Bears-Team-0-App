import React, { Component } from "react";
class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <p>
          Likes: {this.props.likes} <a href="#">Share</a>{" "}
        </p>
      </div>
    );
  }
}

export default Quiz;
