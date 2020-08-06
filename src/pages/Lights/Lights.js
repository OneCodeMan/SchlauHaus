import React, { Component } from 'react';
import '../styles.css';
import './Lights.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';

class Lights extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Lights">
        <h1 className="pageTitle">Your Lights</h1>
        
        {/* MOTION DETECTION MODE */}
        <hr />
        <div className="automaticLightsMode">
          <ModeToggleSwitch 
            title="Automatic Lights"
            checked={this.state.checked}
            onToast="Automatic Lights enabled!"
            offToast="Automatic Lights disabled!"
          />
        </div>

        <hr />
        {/* SECTIONS */}

      </div>
    );
  }
}

export default Lights;
