import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddLight.css';
import Form from 'react-bootstrap/Form';

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
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label className="sectionLabel">Section</Form.Label>
            <br />
            <select>
              <option>Kitchen</option>
              <option>Backyard</option>
              <option>Living Room</option>
            </select>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label className="sectionLabel">Name</Form.Label>
            <p className="moreInfo">
              This is the name of your light. A good name would be a name to describe
              the location of this light in the room. For example, "light above the sink"
              if a light is in the kitchen section.
            </p>
            <br />
            <Form.Control type="text" placeholder="Enter light name" className="sectionInput" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label className="sectionLabel">Device</Form.Label>
            <br />
            <select>
              <option>Tatronics LED x83v9</option>
              <option>DaVINCI 3D Lights x1291fa</option>
              <option>Harold Krümmer su23</option>
            </select>
          </Form.Group>
          <Link to="/lights">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

export default AddLight;
