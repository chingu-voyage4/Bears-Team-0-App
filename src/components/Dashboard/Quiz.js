import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// representation of quiz for allquizzes page
const Quiz = ({
  title, mainColor, body, likes, id,
}) => (
  <div className="quiz">
    <Link href="/#" style={{ textDecoration: 'none', color: 'inherit' }} to={`/takequiz/${id}`}>
      <h2>{title}</h2>
    </Link>
    <section className="quiz-body">
      <p>{body}</p>
    </section>
    <section className={`quiz-footer ${mainColor}`}>
      <span>
        <i className="fa fa-heart" /> {likes}
      </span>{' '}
      <a href="/#">Share</a>{' '}
    </section>
  </div>
);

Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Quiz;
