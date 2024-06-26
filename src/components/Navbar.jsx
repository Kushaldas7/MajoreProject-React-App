import React from 'react';
// import jeep from './images/jeep.png';

function Navbar() {
  return (
    <>
      <header>
        <a href="#home" class="logo">
          <img src={require('./img/jeep.png')} alt="" />
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#ride">Ride</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
        <div class="header-btn">
          <a href="#" class="sign-up">
            Sign-Up
          </a>
          <a href="#" class="sign-in">
            Sign-In
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
