import React, { Component } from 'react';
import './FrequencyWeek.css';

const daysOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

class FrequencyWeek extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {daysOfTheWeek.map((day) => 
          <div className="dayWrapper"> 
          <input 
            type="checkbox" 
            name="day" 
            className="checkboxInput"
          />
          <div className="day">
            <p>{day}</p>
          </div>
        </div>
        )}
      </>
    );
  }
  
}

export default FrequencyWeek;
