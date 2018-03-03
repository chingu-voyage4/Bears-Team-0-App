import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./Landing/Landing";
import AllQuizzes from "./AllQuizzes/AllQuizzes";
import { MakeQuiz } from "./MakeQuiz/MakeQuiz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path="/" component={Landing} />
          <Route exact path="/all" component={AllQuizzes} />
          <Route exact path="/make-quiz" component={MakeQuiz} />
        </Layout>
      </div>
    );
  }
}

export default App;
