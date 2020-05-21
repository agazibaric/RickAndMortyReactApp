import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((resp) => {
        console.log("Get succsesfull");
        console.log(resp);
        this.setState({
          characters: resp.data.results,
        });
      })
      .catch((error) => {
        console.log("ERROR while making a get request");
        console.log(error);
      });
  }

  charactersList() {
    return this.state.characters.map((c) => {
      return <Character character={c} key={c.id} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">{this.charactersList()}</div>
        </div>
      </div>
    );
  }
}

export default Characters;
