import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';
import Profile from './pages/Profile.page';
import FoodCommunityIndex from './pages/FoodCommunityIndex.page';
import './App.css';
import './FoodCommunity-Chat.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile/me" component={Profile} />
      <Route path="/food-community/main" component={FoodCommunityIndex} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
