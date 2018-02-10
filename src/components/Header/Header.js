import React from 'react';
import camera from '../../images/video-camera.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router';
import { signOut } from '../../actions'
import './Header.css';

   
export const Header = ({ user, signOut }) => {
  const displayUser = user.name ? 
        
    <div className='user-signed-in'> 
      <h2>Hello, {user.name} </h2> 
      <button type='submit' onClick={signOut}> Sign Out </button> 
    </div> :
    <div className='user-sign-up'>  
      <Link to='/login' className='user-link'>Login</Link>
      <div id='bullet-pt'></div>
      <Link to='/sign-up' className='user-link'>Create Account</Link>
    </div>

  return (
    <header>
      <Link to='/' className="title-cont">
        <img className="logo" alt="logo" src={camera} />
        <h1>Movie<span className="title">Tracker</span></h1>
      </Link>
      <div className="menu-mobile">
        <i className="fas fa-bars" id="menu"></i>
        { displayUser }
      </div>
      <Link to='/favorites'>
        <button>Favorites</button>
      </Link>
    </header>
  );
};


export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  signOut: user => dispatch(signOut(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)