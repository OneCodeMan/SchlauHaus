import React, { Component } from 'react';
import '../styles.css';
import './Cameras.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';
import Section from '../../components/Section/Section';

const mockSectionItemsLivingRoom = [
  {
    title: 'Corner above plant',
    onInfo: '(since 4 days ago, 05:00 May 22, 2020)',
    offInfo: '',
    onStatus: 'ON',
    offStatus: 'OFF',
    onToast: 'Corner above plant camera enabled!',
    offToast: 'Corner above plant camera disabled!'
  },
  {
    title: 'Hallway entrance',
    onStatus: 'ON (motion detected)',
    offStatus: 'OFF',
    onInfo: '(since 5 minutes ago, 21:20 May 22, 2020)',
    offInfo: 'Last on a few minutes ago (motion detected)',
    onToast: 'Hallway entrance camera enabled!',
    offToast: 'Hallway entrance camera disabled!'
  }
];

const mockSectionItemsKitchen = [
  {
    title: 'Above Sink',
    onInfo: '',
    offInfo: '(Last on 10 hours ago at 10:00)',
    onStatus: 'ON',
    offStatus: 'OFF',
    onToast: 'Kitchen camera enabled!',
    offToast: 'Kitchen camera disabled!'
  },
];

const mockCameraDetails = [
  {
    date: "May 28, 2020",
    info: "Activity detected at 00:32"
  },
  {
    date: "May 21, 2020",
    info: "Activity detected at 11:22"
  }
];

const sectionItemsOnBackgroundColour = "#9F2042";

class Cameras extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Cameras">
        <h1 className="pageTitle">Cameras</h1>
        
        {/* MOTION DETECTION MODE */}
        <hr />
        <div className="motionDetectionMode">
          <ModeToggleSwitch 
            title="Motion Detection Mode"
            checked={this.state.checked}
            onToast="Motion Detection Mode enabled!"
            offToast="Motion Detection Mode disabled!"
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
      </div>
    );
  }
}

export default Cameras;
