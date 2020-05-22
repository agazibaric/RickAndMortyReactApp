import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
    };

    this.mainLink = "https://rickandmortyapi.com/api/character/";
  }

  componentDidMount() {
    this.filterCharacters();
  }

  charactersList = () => {
    return this.state.characters.map((c) => {
      return <Character character={c} key={c.id} />;
    });
  };

  pagesList = () => {
    let n = this.state.pages > 5 ? 5 : this.state.pages;
    let paginationItems = [];
    for (let page = 1; page <= n; page++) {
      if (page == 1) {
        paginationItems.push(<Pagination.Item active>{page}</Pagination.Item>);
      } else {
        paginationItems.push(<Pagination.Item>{page}</Pagination.Item>);
      }
    }
    return paginationItems;
  };

  filterCharacters = (filter) => {
    axios
      .get(this.mainLink, {
        params: filter,
      })
      .then((resp) => {
        console.log(resp);
        this.setState({
          characters: resp.data.results,
          pages: resp.data.info.pages,
          totalItemsCount: resp.data.info.count,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    console.log(this);
    this.setState({ currentPage: pageNumber });
  };

  render() {
    return (
      <Container>
        <SearchForm filterCharacters={this.filterCharacters} />
        <Container className="mt-5 mb-3 justify-content-md-center">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.currentPage}
            itemsCountPerPage={this.state.pages}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </Container>

        <Row className="justify-content-md-center">{this.charactersList()}</Row>
      </Container>
    );
  }
}

export default Characters;
