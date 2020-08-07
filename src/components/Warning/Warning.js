import React, { Component } from 'react';
import '../styles.css';
import './Warning.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Warning extends Component {
  constructor() {
    super();
    this.state = { displayModal: false }
  }

  handleClose() {
    this.setState({ displayModal: false });
  }

  render() {
    return (
      <Modal show={this.state.displayModal} className="warningModal">
        <Modal.Header>
          <Modal.Title class="modalTitle modalText">
            WARNING
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="modalText">
          {this.props.modalText}
          <br />
          <input type="password" className="modalPassword" />
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="dark" onClick={this.handleClose}>
            Confirm
          </Button>
          <Button variant="danger" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Warning;