import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Home-Profile.css';
import './FoodCommunity-Chat.css';
import PrivateRoute from './components/hoc/PrivateRoute';
import PageLoader from './components/hoc/PageLoader';
const Home = lazy(() => import('./pages/Home.page'));
const NotFound = lazy(() => import('./pages/NotFound.page'));
const Profile = lazy(() => import('./pages/Profile.page'));
const FoodCommunityIndex = lazy(() =>
  import('./pages/FoodCommunityIndex.page'),
);
const Auth = lazy(() => import('./pages/Auth.page'));
const Forgot = lazy(() => import('./pages/Forgot.page'));

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute exact path="/" component={Home} /> */}
        <Route path="/profile/me" component={Profile} />
        <Route path="/food-community/main" component={FoodCommunityIndex} />
        <Route path="/auth" component={Auth} />
        <Route path="/forgot" component={Forgot} />
        {/* Delete spinner later */}
        <Route path="/spinner" component={PageLoader} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default App;
