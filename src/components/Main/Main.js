import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';


export const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => (
          <CardContainer films={props.films} />
          )} 
        />
        <Route path="/login" render={() => (
          props.user.name ? (<Redirect to="/" />) : (<Login />)
          )}
        />
         <Route path="/sign-up" render={() => (
          props.user.name ? (<Redirect to="/" />) : (<Signup />)
          )}
        />
        <Route path="/favorites" render={() => (
          props.user.name ? 
            (<CardContainer films={props.user.favorites} />) 
            : (<Redirect to="/" />)
          )} 
        />     
        </Switch>
    </main>
  ); 
};

export const mapStateToProps = store => ({
  user: store.user,
  films: store.films
});

export default withRouter(connect(mapStateToProps, null)(Main));