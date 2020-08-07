import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import Button from 'react-bootstrap/Button';
import '../../details.css';
import './IrrigationDetail.css';
import FrequencyWeek from '../../../components/FrequencyWeek/FrequencyWeek';

class IrrigationDetail extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const isScheduled = this.state.checked ? 'normal' : 'fadeOut';
    const isDisabled = this.state.checked ? 'false' : 'true';
    return (
      <div className="irrigationDetail">

        <div className="titleDiv textCenter">
          <h1 className="title">Sprinkler Detail</h1>
          <h3 className="subTitle">83 Öbst Straße, All Sprinklers</h3>
        </div>
  
        <div className="toggle textCenter">
          <h5 className="scheduled">SCHEDULED</h5>
          <label className="toggleSwitchContainer">
            <Switch 
              className="scheduleSwitch"
              onChange={this.handleChange}
              checked={this.state.checked}
              handleDiameter={30}
              onColor="#613DC1"
              uncheckedIcon={false}
              checkedIcon={false}
              height={35}
              width={70}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </label>
        </div>

        <div className="frequencyDiv">
          <h4 className="tertiaryTitle textCenter">Frequency</h4>
          <div className="frequencySelection">
            <div className={`daySetting ${isScheduled}`}>
              <FrequencyWeek
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>

        <div className="durationDiv">
          <h4 className="tertiaryTitle textCenter">Duration</h4>
          <div className="durationSettings textCenter">
            <div className={`timeSetting ${isScheduled}`}>
              <input type="time"/>
              <p className="label">Time</p>
            </div>
            <div className="minutesSetting">
              <input type="number" min="2" max="20" className="numberInput"/>
              <p className="label">Duration (mins)</p>
            </div>
          </div>
        </div>

        <div className="confirmButtonDiv textCenter">
          <Button variant="primary">
            Confirm
          </Button>
        </div>
  
        <div className="backButton">
          <Link to="/irrigation">
            <Button variant="dark">
              Back to Irrigation Page
            </Button>
          </Link>
        </div>
  
      </div>
    );
  }
}

export default IrrigationDetail;
