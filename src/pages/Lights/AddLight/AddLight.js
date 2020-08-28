import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddLight.css';

class AddLight extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2 className="formTitle">
          Add Light
        </h2>
        <form>
          <label>Section</label>
          <br />
          <select>
            <option>Kitchen</option>
            <option>Backyard</option>
            <option>Living Room</option>
          </select>
          <br />
          <label>Name</label>
          <p className="moreInfo">
            This is the name of your light. A good name would be a name to describe
            the location of this light in the room. For example, "light above the sink"
            if a light is in the kitchen section.
          </p>
          <input type="text" placeholder="Enter light name" className="sectionInput" required />
          <br />
          <label>Device</label>
          <select>
            <option>Tatronics LED x83v9</option>
            <option>DaVINCI 3D Lights x1291fa</option>
            <option>Harold Krümmer su23</option>
          </select>

          <div class="submit-div">
            <Button type="submit" variant="secondary" className="link">
              Submit
            </Button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default AddLight;
