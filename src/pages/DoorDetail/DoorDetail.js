import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </div>
  );
}

export default DoorDetail;
