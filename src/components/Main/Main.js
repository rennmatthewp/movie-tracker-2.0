import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites'
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';


export const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ CardContainer } />
        <Route path="/login" render={() => (
          props.user.name ? (<Redirect to="/" />) : (<Login />)
          )}
        />
         <Route path="/sign-up" render={() => (
          props.user.name ? (<Redirect to="/" />) : (<Signup />)
          )}
        />
        <Route path="/favorites" render={() => (
          props.user.name ? (<Favorites />) : (<Redirect to="/" />)
          )} 
        />     
        </Switch>
    </main>
  ); 
};

export const mapStateToProps = store => ({
  user: store.user,
});

export default withRouter(connect(mapStateToProps, null)(Main));