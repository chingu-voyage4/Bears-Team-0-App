import React, { Component } from "react";

const Quiz = ({ title, mainColor, body, likes }) => {
  return (
    <div className="quiz">
      <h2>{title}</h2>
      <section className="quiz-body">
        <p>{body}</p>
      </section>
      <section className={`quiz-footer ${mainColor}`}>
        <span>
          <i className="fa fa-heart" /> {likes}
        </span>{" "}
        <a href="#">Share</a>{" "}
      </section>
    </div>
  );
};

export default Quiz;
