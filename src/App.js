import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainScreen } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
