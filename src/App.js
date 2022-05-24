import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainScreen from './MainScreen';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    </Router>
  );
}

export default App;
