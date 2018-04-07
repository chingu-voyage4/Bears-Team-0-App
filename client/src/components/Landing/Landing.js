import React from 'react';
import laptop from "../../stylesheets/assets/laptop.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-center">
        <section>
          <div className="landing-title">
            <h1>QUIZZLY BEAR</h1>
            <h3>Make quizzes instantly.</h3>
          </div>
          <img src={laptop} alt="Laptop" />
        </section>
        <button className="blue-btn">JOIN US</button>
      </div>
    </div>
  );
}

export default Landing;