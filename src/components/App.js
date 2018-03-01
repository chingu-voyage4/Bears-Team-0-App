import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./Landing/Landing";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllQuizzes from "./AllQuizzes/AllQuizzes";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Route exact path="/" component={Landing} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/all" component={AllQuizzes} />
        </Layout>
      </div>
    );
  }
}

export default App;
