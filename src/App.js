import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import './App.css'
import NotFound from './pages/NotFound.page';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
