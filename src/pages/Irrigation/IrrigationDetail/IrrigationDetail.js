import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../details.css';
import './IrrigationDetail.css';

function IrrigationDetail() {

  return (
    <div className="irrigationDetail">

      <div className="backButton">
        <Link to="/irrigation">
          <Button variant="dark">
            Back to Irrigation Page
          </Button>
        </Link>
      </div>

    </div>
  );
}

export default IrrigationDetail;
