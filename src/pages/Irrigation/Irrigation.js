import React, { Component } from 'react';
import '../styles.css';
import './Irrigation.css';
import 'react-toastify/dist/ReactToastify.css';
import Section from '../../components/Section/Section';

const mockSectionItemsAddress1 = [
  {
    title: 'Front Lawn',

    onStatus: 'SCHEDULED',
    offStatus: 'OFF',
    onInfo: 'ON (14 mins remaining)',
    offInfo: '(Ran today at 07:00)',
    onToast: 'Front lawn sprinkler turned on!',
    offToast: 'Front lawn sprinkler turned off!'
  },
  {
    title: 'Backyard',

    onStatus: 'SCHEDULED',
    offStatus: 'OFF',
    onInfo: 'ON (14 mins remaining)',
    offInfo: '(Ran today at 07:00)',
    onToast: 'Backyard sprinkler turned on!',
    offToast: 'Backyard sprinkler turned on!'
  }
];

const mockSectionItemsAddress2 = [
  {
    title: 'Backyard',

    onStatus: 'SCHEDULED',
    offStatus: 'OFF',
    onInfo: 'ON (14 mins remaining)',
    offInfo: '(Ran today at 07:00)',
    onToast: 'Front lawn sprinkler turned on!',
    offToast: 'Front lawn sprinkler turned off!'
  },
  {
    title: 'Front Lawn',

    onStatus: 'SCHEDULED',
    offStatus: 'OFF',
    onInfo: 'ON (14 mins remaining)',
    offInfo: '(Ran today at 07:00)',
    onToast: 'Backyard sprinkler turned on!',
    offToast: 'Backyard sprinkler turned on!'
  },
  {
    title: 'Flower Bed',
    
    onStatus: 'SCHEDULED',
    offStatus: 'OFF',
    onInfo: 'ON (14 mins remaining)',
    offInfo: '(Ran today at 07:00)',
    onToast: 'Backyard sprinkler turned on!',
    offToast: 'Backyard sprinkler turned on!'
  }
];

const sectionItemsOnBackgroundColour = "#0EAD69";

class Irrigation extends Component {

  constructor() {
    super();
    this.state = { checked: true };
  }

  render() {
    return (
      <div className="Irrigation">
        <h1 className="pageTitle">Irrigation</h1>
        <hr />
        {/* SECTIONS */}
        <Section 
          title="53 Öbst Straße"
          sectionItems={mockSectionItemsAddress1}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
        <hr />
        <Section 
          title="Bernauer Str. 63-64, 13355"
          sectionItems={mockSectionItemsAddress2}
          sectionItemsOnBackgroundColour={sectionItemsOnBackgroundColour}
        />
      </div>
    );
  }
}

export default Irrigation;
