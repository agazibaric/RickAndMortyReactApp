import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Character",
    };
  }
  render() {
    return (
      <div className="mb-5 justify-content-md-center">
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Name" />
            </Col>
            <Col>
              <Form.Control placeholder="Status" />
            </Col>
            <Col>
              <Form.Control placeholder="Species" />
            </Col>
            <Col>
              <Form.Control placeholder="Type" />
            </Col>
            <Col>
              <Form.Control placeholder="Gender" />
            </Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={this.props.filterCharacters.bind(this, this.state)}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
