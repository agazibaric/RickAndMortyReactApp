import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
  }

  getTypeValue = (value) => {
    return value === "" ? "No type" : value;
  };
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
            {this.props.character.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Card
                  border="secondary"
                  style={{
                    width: "15rem",
                  }}
                >
                  <Card.Img variant="top" src={this.props.character.image} />
                </Card>
              </Col>
              <Col sm={8}>
                <Container>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Status:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.props.character.status}
                      </Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Species:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.props.character.species}
                      </Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Type:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.getTypeValue(this.props.character.type)}
                      </Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Gender:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.props.character.gender}
                      </Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Origin:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.props.character.origin.name}
                      </Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm={2} className="font-weight-bold">
                      Location:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Label column>
                        {this.props.character.location.name}
                      </Form.Label>
                    </Col>
                  </Form.Group>
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CharacterInfo;
