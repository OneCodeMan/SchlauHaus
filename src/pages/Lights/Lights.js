import React, { Component } from 'react';
import '../styles.css';
import './Lights.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';
import Section from '../../components/Section/Section';

const mockSectionItemsLivingRoom = [
  {
    title: 'Main',
    onInfo: '',
    offInfo: '',
    onToast: 'Main light on!',
    offToast: 'Main light off!'
  },
  {
    title: 'Piano lamp',
    onInfo: '',
    offInfo: '',
    onToast: 'Piano lamp on!',
    offToast: 'Piano lamp off!'
  },
  {
    title: 'Table lamp',
    onInfo: '',
    offInfo: '',
    onToast: 'Table lamp on!',
    offToast: 'Table lamp off!'
  }
];

const mockSectionItemsKitchen = [
  {
    title: 'Main',
    onInfo: '',
    offInfo: '',
    onToast: 'Main lamp on!',
    offToast: 'Main lamp off!'
  },
  {
    title: 'Kitchen',
    onInfo: '',
    offInfo: '',
    onToast: 'Kitchen lamp on!',
    offToast: 'Kitchen lamp off!'
  }
];

const mockSectionItemsBackyard = [
  {
    title: 'Main',
    onInfo: '',
    offInfo: '',
    onToast: 'Main lamp on!',
    offToast: 'Main lamp off!'
  }
];

const sectionItemsOnBackgroundColour = "#FFD23F";

class Lights extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Lights">
        <h1 className="pageTitle">Lights</h1>
        
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
          title="Living Room"
          sectionItems={mockSectionItemsLivingRoom}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
        <hr />
        <Section 
          title="Kitchen"
          sectionItems={mockSectionItemsKitchen}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
        <hr />
        <Section 
          title="Backyard"
          sectionItems={mockSectionItemsBackyard}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
      </div>
    );
  }
}

export default Lights;
