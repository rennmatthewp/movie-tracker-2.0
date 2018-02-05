import React from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { Switch, Route } from 'react-router-dom';

export const Main = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={ () => (
          <CardContainer /> 
        )} />
       
        <Route path='/login/' />
        <Route path='/create-account/' />
      </Switch>
    </main>
  )
}