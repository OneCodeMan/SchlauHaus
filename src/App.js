import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './pages/Nav/Nav';
import Main from './pages/Main/Main';
import Cameras from './pages/Cameras/Cameras';
import Doors from './pages/Doors/Doors';
import Lights from './pages/Lights/Lights';
import Irrigation from './pages/Irrigation/Irrigation';
import Temperature from './pages/Temperature/Temperature';
import CameraDetail from './pages/CameraDetail/CameraDetail';
import DoorDetail from './pages/DoorDetail/DoorDetail';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>

        {/* Main shit */}
        <Route exact path="/" component={Main} />
        <Route path="/cameras" component={Cameras} />
        <Route path="/doors" component={Doors} />
        <Route path="/lights" component={Lights} />
        <Route path="/irrigation" component={Irrigation} />
        <Route path="/temperature" component={Temperature} />

        {/* Other shit (details, forms, etc.) */}
        <Route path="/camera-detail" component={CameraDetail} />

        <Route path="/door-detail" component={DoorDetail} />


        {/* <Route path="/irrigation-detail-thing" component={IrrigationDetail} /> */}

      </Switch>
    </Router>
  );
}

export default App;
