import React from 'react';
import Card from './Card';

const Main = ({ woodpilesList, onClick }) => (
  <main>
    {woodpilesList.map((woodpile) => (
      <Card
        key={woodpile.id}
        woodpile={woodpile}
        onClick={onClick}
      />
    ))}
  </main>
);

export default Main;
