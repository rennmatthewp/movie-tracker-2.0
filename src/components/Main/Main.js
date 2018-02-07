import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Login from '../Login/Login';
import { Switch, Route } from 'react-router-dom';

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ CardContainer } />
        <Route path="/login" component={ Login }/>
        <Route path="/create-account" />
      </Switch>
    </main>
  );
};
