import React, { Component } from 'react';
import '../styles.css';
import './Doors.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';
import Section from '../../components/Section/Section';

const mockSectionItemsMelissa = [
  {
    title: 'Melissa',
    onInfo: '',
    offInfo: '',
    onStatus: 'ON',
    offStatus: 'OFF',
    onToast: 'Melissa\'s door monitoring enabled!',
    offToast: 'Melissa\'s door monitoring disabled!'
  },
];

const sectionItemsOnBackgroundColour = "#88665D";

class Doors extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Doors">
        <h1 className="pageTitle">Doors</h1>
        
        {/* MOTION DETECTION MODE */}
        <hr />
        <div className="automaticLightsMode">
          <ModeToggleSwitch 
            title="Automatic Lights"
            checked={this.state.checked}
            onToast="Automatic Lights enabled!"
            offToast="Automatic Lights disabled!"
            onMessage="ON"
            offMessage="OFF"
          />
        </div>

        <hr />
        {/* SECTIONS */}
        <Section 
          title="Upstairs"
          sectionItems={mockSectionItemsMelissa}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
      </div>
    );
  }
}

export default Doors;
