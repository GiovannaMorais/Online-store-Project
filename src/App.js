import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainScreen from './MainScreen';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
        <Route exact path="/categories" component={ Categories } />
      </Switch>
    </Router>
  );
}

export default App;
