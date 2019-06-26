import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import Routes from './routes/routes';

const Home = Routes.Home;
const Login = Routes.Login;
const Dashboard = Routes.Dashboard;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/" />
          <Login path="login" />
          <Dashboard path="dashboard" />
        </Router>
      </header>
    </div>
  );
}

export default App;
