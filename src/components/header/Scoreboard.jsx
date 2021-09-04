import React from 'react';

const Scoreboard = ({ currentScore, highScore }) => (
  <div id='scoreboard'>
    <p>
      High Score:
      {' '}
      <span>
        {highScore}
      </span>
    </p>
    <p>
      Current Score:
      {' '}
      <span>
        {currentScore}
      </span>
    </p>
  </div>
);

export default Scoreboard;
