import React, { Component } from 'react';
import '../styles.css';
import './Cameras.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';

class Cameras extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Cameras">
        <h1 className="pageTitle">Your Cameras</h1>
        
        {/* MOTION DETECTION MODE */}
        <hr />
        <div className="motionDetectionMode">
          <ModeToggleSwitch 
            title="Motion Detection Mode"
            checked={this.state.checked}
            onToast="Motion Detection Mode enabled!"
            offToast="Motion Detection Mode disabled!"
          />
        </div>

        <hr />
        {/* SECTIONS */}

      </div>
    );
  }
}

export default Cameras;
