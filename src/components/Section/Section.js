import React, { Component } from 'react';
import './Section.css';
import '../styles.css';
import SectionItem from '../SectionItem/SectionItem';

class Section extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="section">
        <h2 className="sectionTitle">{this.props.title}</h2>
        <div className="sectionItems">
          {this.props.sectionItems.map((sectionItem) => 
            <SectionItem
              title={sectionItem.title}
              onStatus={sectionItem.onStatus}
              offStatus={sectionItem.offStatus}
              onInfo={sectionItem.onInfo}
              offInfo={sectionItem.offInfo}
              onToast={sectionItem.onToast}
              offToast={sectionItem.offToast}
              onBackgroundColour={this.props.sectionItemsOnBackgroundColour}
              offBackgroundColour={this.props.sectionItemsOffBackgroundColour}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Section;