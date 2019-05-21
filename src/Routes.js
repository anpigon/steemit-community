import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';

const AppRouter = () => (
  <Route>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/:category/@:author/:permlink" component={DetailPage} />
    <Route exact path="/@:author/:permlink" component={DetailPage} />
  </Route>
);

export default AppRouter;
