import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import TopNav from './components/TopNav';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Container className="mb-2">
        <TopNav></TopNav>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
