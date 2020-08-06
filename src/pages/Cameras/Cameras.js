import React, { Component } from 'react';
import Switch from 'react-switch';
import '../styles.css';
import './Cameras.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Cameras extends Component {

  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    let message = checked ? 'Motion Detection Mode turned on!' : 
                            'Motion Detection Mode turned off!';
    if (checked)
      toast.success(message);
    else 
      toast.dark(message);
  }

  render() {
    return (
      <div className="Cameras">
        <h1 className="pageTitle">Your Cameras</h1>
        
        {/* MOTION DETECTION MODE */}
        <hr />
        <div className="motionDetectionMode">
          <h2 className="motionDetectionModeTitle">
            Motion Detection Mode
          </h2>
          <label className="switchContainer">
            <Switch 
              className="switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              handleDiameter={30}
              onColor="#613DC1"
              uncheckedIcon={false}
              checkedIcon={false}
              height={35}
              width={70}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </label>
          <p style={{fontWeight: 'bold'}}>{this.state.checked ? "ON" : "OFF"}</p>
          <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        </div>

        <hr />
        {/* SECTIONS */}

      </div>
    );
  }
}

export default Cameras;
