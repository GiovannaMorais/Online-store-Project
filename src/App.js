import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainScreen from './MainScreen';
import ShoppingCart from './ShoppingCart';
import DetailsProduct from './pages/DetailsProduct';
import CartCheckout from './components/CartCheckout';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/product-details/:id" component={ DetailsProduct } />
        <Route exact path="/CartCheckout" component={ CartCheckout } />
        <Route path="/header" component={ Header } />
      </Switch>
    </Router>
  );
}

export default App;
