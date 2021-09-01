import React from 'react';

const Scoreboard = ({ currentScore, highScore }) => (
  <div id='scoreboard'>
    <p>
      High Score:
      {highScore}
    </p>
    <p>
      Current Score:
      {currentScore}
    </p>
  </div>
);

export default Scoreboard;
