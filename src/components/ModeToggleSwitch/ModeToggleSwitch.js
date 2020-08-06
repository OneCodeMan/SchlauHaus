import React, { Component } from 'react';
import Switch from 'react-switch';
import { ToastContainer, toast } from 'react-toastify';
import './ModeToggleSwitch.css';

class ModeToggleSwitch extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = { checked: true };
  }

  handleChange(checked) {
    this.setState({ checked });
    let message = checked ? this.props.onToast : 
                            this.props.offToast;
    if (checked)
      toast.success(message);
    else 
      toast.dark(message);
  }

  render() {
    return (
      <div>
        <h2 className="toggleSwitchTitle">
            {this.props.title}
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
          <p style={{fontWeight: 'bold'}}>{this.state.checked ? this.props.onMessage : this.props.offMessage}</p>
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
    );
  }
}

ModeToggleSwitch.defaultProps = {
  onMessage: 'ON',
  offMessage: 'OFF',
};

export default ModeToggleSwitch;