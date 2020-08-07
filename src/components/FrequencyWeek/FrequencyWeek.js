import React from 'react';
import './FrequencyWeek.css';

function FrequencyWeek(props) {
  const daysOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <>
      {daysOfTheWeek.map((day) => 
        <div className="dayWrapper">       
        <input 
          type="checkbox" 
          name="day" 
          className="checkboxInput"
          disabled={props.disabled}
        />
        <div className="day">
          <p>{day}</p>
        </div>
      </div>
      )}
    </>
  );
}

export default FrequencyWeek;
