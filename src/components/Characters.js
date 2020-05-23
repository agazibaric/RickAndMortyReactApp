import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-js-pagination";
import SearchForm from "./SearchForm";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      currentPage: 1,
      pages: 1,
      totalItemsCount: 0,
      itemsCountPerPage: 20,
      filter: {},
    };

    this.mainLink = "https://rickandmortyapi.com/api/character/";
  }

  componentDidMount() {
    this.getCharacters();
  }

  charactersList = () => {
    if (this.state.characters.length > 0) {
      return this.state.characters.map((c) => {
        return <Character character={c} key={c.id} />;
      });
    } else {
      return (
        <div className="mb-5">
          <h3 className="pl-4">No results</h3>
          <p className="mb-5">Try to choose other features</p>
        </div>
      );
    }
  };

  filterCharacters = (newFilter) => {
    newFilter["page"] = 1;
    this.setState({
      currentPage: 1,
      filter: newFilter,
    });

    this.getCharacters(newFilter);
  };

  getCharacters = (filter = {}) => {
    axios
      .get(this.mainLink, {
        params: filter,
      })
      .then((resp) => {
        this.setState({
          characters: resp.data.results,
          pages: resp.data.info.pages,
          totalItemsCount: resp.data.info.count,
        });
      })
      .catch((error) => {
        this.setState({
          characters: [],
          pages: 1,
          totalItemsCount: 0,
        });
      });
  };

  handlePageChange = (pageNumber) => {
    let newFilter = this.state.filter;
    newFilter["page"] = pageNumber;
    this.setState({ currentPage: pageNumber, filter: newFilter });
    this.getCharacters(newFilter);
  };

  render() {
    return (
      <Container>
        <SearchForm filterCharacters={this.filterCharacters} />
        <Row className="justify-content-md-center mb-4">
          <Col></Col>
          <Col>
            <Pagination
              itemClass="page-item"
              linkClass="page-link"
              hideDisabled
              activePage={this.state.currentPage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={this.state.totalItemsCount}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">{this.charactersList()}</Row>
      </Container>
    );
  }
}

export default Characters;
