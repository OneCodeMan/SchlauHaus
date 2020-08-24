import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './pages/Nav/Nav';
import Main from './pages/Main/Main';
import Intro from './pages/Main/Intro/Intro';
import RegistrationForm from './pages/Main/RegistrationForm/RegistrationForm';
import LoginForm from './pages/Main/LoginForm/LoginForm';
import Cameras from './pages/Cameras/Cameras';
import Doors from './pages//Doors/Doors';
import Lights from './pages/Lights/Lights';
import Irrigation from './pages/Irrigation/Irrigation';
import Temperature from './pages/Temperature/Temperature';
import CameraDetail from './pages/Cameras/CameraDetail/CameraDetail';
import DoorDetail from './pages/Doors/DoorDetail/DoorDetail';
import DoorEdit from './pages/Doors/DoorEdit/DoorEdit';
import IrrigationDetail from './pages/Irrigation/IrrigationDetail/IrrigationDetail';
import AddSection from './pages/Lights/AddSection/AddSection';
import AddLight from './pages/Lights/AddLight/AddLight';

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
        <Route path="/lights-add-section" component={AddSection} />
        <Route path="/lights-add-light" component={AddLight} />

        <Route path="/camera-detail" component={CameraDetail} />

        <Route path="/door-detail" component={DoorDetail} />
        <Route path="/door-edit" component={DoorEdit} />

        <Route path="/irrigation-detail" component={IrrigationDetail} />

        <Route path="/intro" component={Intro} />

        <Route path="/registration-form" component={RegistrationForm} />
        <Route path="/login-form" component={LoginForm} />

      </Switch>
    </Router>
  );
}

export default App;
