import React from 'react';
import logo from '../../images/logo1.png';
import Title from './Title';
import Alert from './Alert';
import Scoreboard from './Scoreboard';

const Header = ({ currentScore, highScore }) => (
  <header>
    <img
      id='logo'
      src={logo}
      alt=''
    />
    <Title />
    <Alert />
    <Scoreboard currentScore={currentScore} highScore={highScore} />
  </header>
);

export default Header;
