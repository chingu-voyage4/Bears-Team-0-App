import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Landing from "./Landing/Landing";
import AllQuizzes from './AllQuizzes/AllQuizzes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route exact path="/all" component={AllQuizzes} />
      </div>
    );
  }
}

export default App;