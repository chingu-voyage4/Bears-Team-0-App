import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// representation of quiz for allquizzes page
const Quiz = ({ title, mainColor, body, favorites, id, updateQuiz }) => {
  return (
    <div className="quiz">
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={'/takequiz/' + id}
      >
        <h2>{title}</h2>
      </Link>
      <section className="quiz-body">
        <p>{body}</p>
      </section>
      <section className={`quiz-footer ${mainColor}`}>
        <span>
          <i className="fa fa-heart" onClick={updateQuiz} /> {favorites}
        </span>
        <a>Share</a>
      </section>
    </div>
  );
};
Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  favorites: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Quiz;
