import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchForm from "./SearchForm";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };

    this.mainLink = "https://rickandmortyapi.com/api/character/";
  }

  componentDidMount() {
    this.filterCharacters();
  }

  charactersList() {
    return this.state.characters.map((c) => {
      return <Character character={c} key={c.id} />;
    });
  }

  filterCharacters = (filter) => {
    axios
      .get(this.mainLink, {
        params: filter,
      })
      .then((resp) => {
        console.log(resp);
        this.setState({
          characters: resp.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <SearchForm filterCharacters={this.filterCharacters} />
        <Row className="justify-content-md-center">{this.charactersList()}</Row>
      </Container>
    );
  }
}

export default Characters;
