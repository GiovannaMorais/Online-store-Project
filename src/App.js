import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainScreen from './MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
      </Switch>
    </Router>
  );
}

export default App;
