import React, { Component } from 'react';
import '../styles.css';
import './Temperature.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Temperature extends Component {

  constructor() {
    super();
    this.state = { temperature: 24, displayModal: false };
    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ displayModal: false });
  }

  increaseTemp() {
    if (this.state.temperature < 27)
      this.setState({ temperature: this.state.temperature + 1 });
    else
      this.setState({ displayModal: true });
  }

  decreaseTemp() {
    if (this.state.temperature > 0)
      this.setState({ temperature: this.state.temperature - 1 });
    else
      this.setState({ displayModal: true });
  }

  render() {
    return (
      <div className="Temperature">
        <h1 className="pageTitle">Temperature</h1>
        <h3 className="temperatureText">{this.state.temperature}°C</h3>
        <div className="buttonControls">
          <button className="temp-button" onClick={this.decreaseTemp} id="decrease-temp-btn">-</button>
          <button className="temp-button" onClick={this.increaseTemp} id="increase-temp-btn">+</button>
        </div>

        <Modal show={this.state.displayModal} className="warningModal">
          <Modal.Header>
            <Modal.Title class="modalTitle modalText">
              WARNING
            </Modal.Title>
          </Modal.Header>
          <Modal.Body class="modalText">
            You are setting the temperature to {this.state.temperature == 1 ? this.state.temperature - 1 : this.state.temperature + 1}, an extreme setting.
            We require this security measure to ensure that it isn't used maliciously.
            Please enter your password to proceed.
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
      </div>
    );
  }
}

export default Temperature;
