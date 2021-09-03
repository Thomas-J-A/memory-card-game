import React from 'react';
import logo from '../../images/logo.png';
import Title from './Title';
import Alert from './Alert';
import Scoreboard from './Scoreboard';

const Header = ({ currentScore, highScore, alertVisible }) => (
  <header>
    <img
      id='logo'
      src={logo}
      alt=''
    />
    <Title />
    <Alert alertVisible={alertVisible} />
    <Scoreboard currentScore={currentScore} highScore={highScore} />
  </header>
);

export default Header;
