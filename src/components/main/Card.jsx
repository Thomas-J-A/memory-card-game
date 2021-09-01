import React from 'react';

const Card = ({ woodpile, onClick }) => (
  <img
    className='card'
    onClick={() => onClick(woodpile.id)}
    src={woodpile.url}
    alt=''
  />
);

export default Card;
