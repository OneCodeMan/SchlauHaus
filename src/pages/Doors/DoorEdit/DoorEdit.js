import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DoorEdit.css';

class DoorEdit extends Component {
  constructor() {
    super();
    this.state = { startTime: '21:00', endTime: '08:00' };
  }

  render() {
    return (
      <div className="doorEdit">
        <h1 className="title">Editing Door: Melissa</h1>

        <div className="container">
          <h3 className="monitorBetween">Monitor Between</h3>
          <div className="times">

            <div className="timeDiv">

              <div className="time">
                <label>Start: </label>
                <input type="time"></input>
              </div>

              <div className="time">
                <label>End: </label>
                <input type="time"></input>
              </div>

            </div> {/** End of time div */}

            <div className="buttonDiv">
              <Button variant="primary">
                Edit
              </Button>
            </div>

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
