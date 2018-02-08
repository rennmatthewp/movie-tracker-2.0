import React from 'react';
import camera from '../../images/video-camera.svg';
import { Link } from 'react-router-dom';
import './Header.css';

      // <i className="fas fa-bars" id="menu" />


export const Header = () => {
  return (
    <header>
      <Link to='/'>
      <div className="title-cont">
        <img className="logo" alt="logo" src={camera} />
        <h1>Movie<span className="title">Tracker</span></h1>
      </div>
      </Link>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/sign-up'>Create Account</Link>
    </header>
  );
};
