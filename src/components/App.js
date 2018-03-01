import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Landing from "./Landing/Landing";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Landing}/>
        <Route exact path="/team" component={Team} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;