import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const filter = {
      name: this.state.name.value,
      status: this.state.status.value,
      species: this.state.species.value,
      type: this.state.type.value,
      gender: this.state.gender.value,
    };
    this.props.filterCharacters(filter);
  };

  render() {
    return (
      <div className="mb-5 justify-content-md-center">
        
        <div className="mb-3">
          <h4>Find your favorite character</h4>
        </div>

        <Form onSubmit={this.handleSearch}>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Name"
                ref={(ref) => {
                  this.state.name = ref;
                }}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                ref={(ref) => {
                  this.state.status = ref;
                }}
              >
                <option></option>
                <option>alive</option>
                <option>dead</option>
                <option>unknown</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                placeholder="Species"
                ref={(ref) => {
                  this.state.species = ref;
                }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Type"
                ref={(ref) => {
                  this.state.type = ref;
                }}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                ref={(ref) => {
                  this.state.gender = ref;
                }}
              >
                <option></option>
                <option>male</option>
                <option>female</option>
                <option>genderless</option>
                <option>unknown</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <hr />
      </div>
    );
  }
}

export default SearchForm;
