import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import TopNav from './components/TopNav';
import HealthStatus from './components/HealthStatus';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
              <HealthStatus>
                
              </HealthStatus>
            </Route>
          </Switch>
        </Router>     
      </Container>
    </div>
  );
}

export default App;
