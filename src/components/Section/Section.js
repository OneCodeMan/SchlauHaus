import React, { Component } from 'react';
import './Section.css';
import '../styles.css';
import SectionItem from '../SectionItem/SectionItem';
import MockSectionItem from '../MockSectionItem/MockSectionItem';

class Section extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="section">
        <div className="sectionTitleWrapper">
          <h2 className="sectionTitle">{this.props.title}</h2>
        </div>
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
          <MockSectionItem 
            title="Add Item"
          />
        </div>
      </div>
    );
  }
}

export default Section;