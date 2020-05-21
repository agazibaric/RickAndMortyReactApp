import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Characters from "./components/Characters";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Header />
        <br />
        <Route path="/" exact component={Characters} />
      </Router>
    );
  }
}

export default App;
