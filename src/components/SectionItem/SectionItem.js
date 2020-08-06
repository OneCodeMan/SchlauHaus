import React, { Component } from 'react';
import './SectionItem.css';
import Switch from 'react-switch';
import { ToastContainer, toast } from 'react-toastify';

class SectionItem extends Component {

  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
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
      <div className="sectionItem">
        <div className="sectionItemBackgroundContainer">
          <div className="sectionItemBackground" 
               style={{ backgroundColor: this.state.checked ? 
                                         this.props.onBackgroundColour :
                                         this.props.offBackgroundColour
                      }}
          >
          </div>
        </div>
        <h3 className="sectionItemTitle">{this.props.title}</h3>
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
        <p className="status">{ this.state.checked ? this.props.onStatus : this.props.offStatus }</p>
        <p className="info">{ this.state.checked ? this.props.onInfo : this.props.offInfo }</p>

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

SectionItem.defaultProps = {
  onBackgroundColour: '#9F2042',
  offBackgroundColour: '#403F4C',
  onStatus: 'ON',
  offStatus: 'OFF',
  onInfo: '',
  offinfo: '',
};

export default SectionItem;