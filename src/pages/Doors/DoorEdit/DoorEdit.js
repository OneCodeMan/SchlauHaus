import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DoorEdit.css';
import Modal from 'react-bootstrap/Modal';

class DoorEdit extends Component {
  constructor() {
    super();
    this.state = { startTime: '21:00', endTime: '08:00', displayModal: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleClose() {
    this.setState({ displayModal: false });
  }

  openModal() {
    this.setState({ displayModal: true });
  }

  render() {
    return (
      <div className="doorEdit">
        <h1 className="title">Editing Door: Melissa</h1>

        <div className="container">
          <h3 className="monitorBetween">Monitor Between</h3>
          <div className="times">

            <div className="timeDiv">

              <form>
                <div className="time">
                  <label>Start (what time do you want to start monitoring the door?): </label>
                  <br />
                  <input type="time" required />
                </div>

                <div className="time">
                  <label>End (what time do you want to end monitoring the door?): </label>
                  <br />
                  <input type="time" required />
                </div>
                <br />

                <div className="buttonDiv">
                  <Button variant="primary" onClick={this.openModal}>
                    Edit
                  </Button>
                </div>
              </form>

            </div> {/** End of time div */}

            <Modal show={this.state.displayModal} className="warningModal">
              <Modal.Header>
                <Modal.Title class="modalTitle modalText">
                  WARNING
                </Modal.Title>
              </Modal.Header>
              <Modal.Body class="modalText">
                Please enter your password to proceed. 
                We require this necessary step to avoid malicious usage.
                <br />
                <input type="password" className="modalPassword" />
              </Modal.Body>
              <Modal.Footer className="modalFooter">
                <Link to="/irrigation">
                  <Button variant="dark">
                    Confirm
                  </Button>
                </Link>
                <Button variant="danger" onClick={this.handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="backButton">
              <Link to="/doors">
                <Button variant="dark">
                  Back to Doors Page
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default DoorEdit;
