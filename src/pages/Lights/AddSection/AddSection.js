import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddSection.css';
import Form from 'react-bootstrap/Form';

class AddSection extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2 className="formTitle">
          Add Section
        </h2>
        <form>
          <label>Section Name</label>
          <p className="moreInfo">
            A 'section' can be a room, it is for grouping lights 
            based on their location. Some example sections can be: 
            'Kitchen', 'Backyard', 'Living Room', 'Attic'.
          </p>
          <br />
          <input type="text" placeholder="Enter section name" className="sectionInput" required/>
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

export default AddSection;
