import React, { Component } from "react";
class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <p>
          Likes: {this.props.likes} <a>Share</a>{" "}
        </p>
      </div>
    );
  }
}

export default Quiz;
