import React, { Component } from 'react';
import '../styles.css';
import './Temperature.css';

class Temperature extends Component {

  constructor() {
    super();
    this.state = { temperature: 24 };
    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
  }

  increaseTemp() {
    if (this.state.temperature < 27)
      this.setState({ temperature: this.state.temperature + 1 });
  }

  decreaseTemp() {
    if (this.state.temperature > 0)
      this.setState({ temperature: this.state.temperature - 1 });
  }

  render() {
    return (
      <div className="Temperature">
        <h1 class="pageTitle">Temperature</h1>
        <h3 class="temperatureText">{this.state.temperature}°C</h3>
        <div className="buttonControls">
          <button className="temp-button" onClick={this.decreaseTemp} id="decrease-temp-btn">-</button>
          <button className="temp-button" onClick={this.increaseTemp} id="increase-temp-btn">+</button>
        </div>
      </div>
    );
  }
}

export default Temperature;
