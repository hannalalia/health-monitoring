import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import TopNav from './components/TopNav';
import HealthStatus from './components/HealthStatus';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExposureReports from './components/ExposureReports';
import RTPCRTest from './components/RTPCRTest';
import Error from './components/Error';
import TravelReports from './components/TravelReports';
import Login from './components/Login'

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
            <Route exact path="/Travel">
              <TravelReports></TravelReports>
            </Route>
            <Route exact path="/Exposure">
              <ExposureReports></ExposureReports>
            </Route>
            <Route exact path="/Tests">
              <RTPCRTest></RTPCRTest>
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route>
              <Error></Error>
            </Route>
          </Switch>
        </Router>     
      </Container>
    </div>
  );
}

export default App;
