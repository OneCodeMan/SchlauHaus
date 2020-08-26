import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import './Cameras.css';
import 'react-toastify/dist/ReactToastify.css';
import ModeToggleSwitch from '../../components/ModeToggleSwitch/ModeToggleSwitch';
import Section from '../../components/Section/Section';
import ReactNotifications from 'react-browser-notifications';

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

const sectionItemsOnBackgroundColour = "#9F2042";

class Cameras extends Component {

  constructor() {
    super();
    this.state = { checked: true, displayModal: false };
    this.showNotifications = this.showNotifications.bind(this);
    this.handleNotifClick = this.handleNotifClick.bind(this);
  }

  componentDidMount() {
    setTimeout(
      function() {
          this.showNotifications();
      }
      .bind(this),
      3000
  );
  }

  showNotifications() {
    if(this.n.supported()) this.n.show();
  }

  handleNotifClick(event) {
    this.n.close(event.target.tag);
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
          <p className="moreInfo">
            If enabled, your cameras will automatically turn on when motion is detected, 
            and will turn off after one minute of not detecting motion.
          </p>
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
        <div className="otherFunctions">
          <Link to="/camera-detail">
            <Button variant="dark">
              Camera Detail
            </Button>
          </Link>
          <br />
          <Button variant="dark" onClick={this.showNotifications}>
            Trigger Motion Detected Notification
          </Button>
        </div>

        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Motion Detected!" // Required
          body="Motion detected in the LIVING ROOM with the CORNER ABOVE PLANT camera"
          icon="icon.jpg"
          onClick={event => this.handleNotifClick(event)}
        />
      </div>
    );
  }
}

export default Cameras;
