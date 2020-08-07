import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../details.css';
import './CameraDetail.css';

function toggleLive() {
  let liveCameraDiv = document.getElementById('liveCameraContainer');
  if (liveCameraDiv.style.display === "none") {
    liveCameraDiv.style.display = "block";
  } else {
    liveCameraDiv.style.display = "none";
  }
}

function CameraDetail() {


  return (
    <div className="cameraDetail">

      <div className="cameraInfo textCenter">
        <h1 className="title">Camera Detail</h1>
        <h3 className="section">Section: Living Room</h3>
        <h3 className="name">Name: Corner Above Plant</h3>
      </div>

      {/* OMIT THIS FOR NOT LIVE */}
      <div id="liveCameraContainer">
        <h3 className="liveNote textCenter">LIVE</h3>
        <div className="liveCamera"></div>
      </div>

      <div className="footageList">
        <div className="camera">
          <div className="cameraBox">

          </div>
          <div className="footageInfo">
            <p>From: 09:00 June 15, 2020</p>
            <p>To: 09:00 June 26, 2020</p>
          </div>
        </div>
        <div className="camera">
          <div className="cameraBox">

          </div>
          <div className="footageInfo">
            <p>Date: May 21, 2020 (10:00 - 19:00)</p>
          </div>
        </div>
      </div>

      <div className="otherFunctions">
        <Button variant="dark" onClick={toggleLive} className="toggleButton">
          Toggle Live/Not Live
        </Button>
      </div>

    </div>
  );
}

export default CameraDetail;
