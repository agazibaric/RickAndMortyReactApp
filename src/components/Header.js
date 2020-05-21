import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="text-center">
          <h1>Rick and Morty Characters</h1>
          <p>
            Explore all the interesting facts about the characters from the
            series
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
