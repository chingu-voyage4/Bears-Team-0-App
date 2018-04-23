import React from 'react';

const DisplayAnalysis = ({ quiz }) => {
  const { title, description, favorites, quizzesTaken, resultAvg} = quiz;
  return (
    <section className="analysis-quiz">
      <div className="analysis-quiz-left">
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Favorites: {favorites}</h3>
      </div>
      <div className="analysis-quiz-right">
        <h3>Quizzes Taken: {quizzesTaken}</h3>
        <h3>Average Results: {resultAvg * 100}%</h3>
      </div>
    </section>
  );
};

export default DisplayAnalysis;
