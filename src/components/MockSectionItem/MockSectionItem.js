// This is for the 'add section' form button
import React, { Component } from 'react';
import './MockSectionItem.css';

class MockSectionItem extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="mockSectionItem">
        <div className="mockSectionItemBackgroundContainer">
          <div className="mockSectionItemBackground">
            <span class="mockSectionItemPlusSpan">
              +
            </span>
          </div>
        </div>
        <h3 className="mockSectionItemTitle">{this.props.title}</h3>
        <div className="mockSectionItemToggle">

        </div>
      </div>
    );
  }
}


export default MockSectionItem;