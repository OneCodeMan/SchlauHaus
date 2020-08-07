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

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cameras" component={Cameras} />
        <Route path="/doors" component={Doors} />
        <Route path="/lights" component={Lights} />
        <Route path="/irrigation" component={Irrigation} />
        <Route path="/temperature" component={Temperature} />
      </Switch>
    </Router>
  );
}

export default App;
