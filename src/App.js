import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import TopNav from './components/TopNav';
import HealthStatus from './components/HealthStatus';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExposureReports from './components/ExposureReports';
import RTPCRTest from './components/RTPCRTest';

function App() {
  return (
    <div className="App">
      <Container className="mb-2">
      <TopNav></TopNav>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/Health">
              <HealthStatus></HealthStatus>
            </Route>
            <Route exact path="/Reports">
              <ExposureReports></ExposureReports>
            </Route>
            <Route>
              <RTPCRTest></RTPCRTest>
            </Route>
          </Switch>
        </Router>     
      </Container>
    </div>
  );
}

export default App;
