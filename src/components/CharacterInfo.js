import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CharacterInfo;
