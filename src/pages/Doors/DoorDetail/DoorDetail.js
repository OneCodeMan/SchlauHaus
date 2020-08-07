import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../details.css';
import './DoorDetail.css';

function DoorDetail() {
  const mockDoorDetails = [
    {
      date: "May 28, 2020",
      info: "Activity detected at 00:32"
    },
    {
      date: "May 21, 2020",
      info: "Activity detected at 11:22"
    }
  ];

  return (
    <div className="doorDetailDiv">
      <h1 className="doorDetailDivTitle">Melissa</h1>
      {mockDoorDetails.map((detail) => (
        <>
          <p className="doorDetailDate">{detail.date}</p>
          <p>• {detail.info}</p>
        </>
      ))}

      <div className="backButton">
        <Link to="/doors">
          <Button variant="dark">
            Back to Doors Page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DoorDetail;
