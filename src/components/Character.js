import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Character extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        className="shadow p-3 mx-1 my-1 bg-light rounded"
        border="secondary"
        style={{
          width: "15rem",
        }}
      >
        <Card.Img variant="top" src={this.props.character.image} />
        <Card.Body>
          <Card.Title>{this.props.character.name}</Card.Title>
          <Button variant="secondary">Show more</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Character;
