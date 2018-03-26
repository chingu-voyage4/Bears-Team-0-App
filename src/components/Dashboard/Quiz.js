import React from "react";
import { Link } from "react-router-dom";

// representation of quiz for allquizzes page
const Quiz = ({ title, mainColor, body, likes, id }) => {
  return (
    <div className="quiz">
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={"/takequiz/" + id}
      >
        <h2>{title}</h2>
      </Link>
      <section className="quiz-body">
        <p>{body}</p>
      </section>
      <section className={`quiz-footer ${mainColor}`}>
        <span>
          <i className="fa fa-heart" /> {likes}
        </span>{" "}
        <a>Share</a>{" "}
      </section>
    </div>
  );
};

export default Quiz;
