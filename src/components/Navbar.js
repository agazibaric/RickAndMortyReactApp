import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-exapnd-lg">
          <Link to="/" className="navbar-brand">
            Rick and Morty
          </Link>
        </nav>
      </div>
    );
  }
}
