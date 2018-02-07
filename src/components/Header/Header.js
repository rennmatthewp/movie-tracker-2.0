import React from 'react';
import camera from '../../images/video-camera.svg';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className="title-cont">
        <img className="logo" alt="logo" src={camera} />
        <h1>Movie<span className="title">Tracker</span></h1>
      </div>
      <i className="fas fa-bars" id="menu" />
    </header>
  );
};
