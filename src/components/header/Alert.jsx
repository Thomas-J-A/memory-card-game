import React from 'react';

const Alert = ({ alertVisible }) => (
  alertVisible
    ? <h2 id='alert'>New High Score!</h2>
    : null
);

export default Alert;
