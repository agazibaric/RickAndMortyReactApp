import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CharacterInfo from "./CharacterInfo";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModalShow: false,
    };
  }
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <>
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
            <Button
              variant="secondary"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Show more
            </Button>
          </Card.Body>
        </Card>
        <CharacterInfo
          show={this.state.addModalShow}
          onHide={addModalClose}
          character={this.props.character}
        />
      </>
    );
  }
}

export default Character;
