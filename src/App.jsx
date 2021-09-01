import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import woodpiles from './components/woodpiles';





const hasClicked = (woodpilesList, id) => {
  const woodpile = woodpilesList.find((woodpile) => woodpile.id === id);
  return woodpile.hasClicked;
};

const resetHasClickedValues = (woodpilesList, setWoodpilesList) => {
  const updatedList = woodpilesList.map((woodpile) => (
    { ...woodpile, hasClicked: false }
  ));

  setWoodpilesList(updatedList);
};







const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [woodpilesList, setWoodpilesList] = useState(woodpiles);

  useEffect(() => {
    // Check if high score has been beaten
    if (currentScore > highScore) setHighScore(currentScore);
  }, [currentScore]);

  useEffect(() => {
    // Shuffle images around
  });

  const handleClick = (id) => {
    // Check if image has already been clicked
    if (hasClicked(woodpilesList, id)) {
      // TODO: update alert
      setCurrentScore(0);
      resetHasClickedValues(woodpilesList, setWoodpilesList);
      return;
    }

    // hasClicked is false so change to true for clicked card
    const updatedList = woodpilesList.map((woodpile) => (
      woodpile.id === id
        ? { ...woodpile, hasClicked: true }
        : woodpile
    ));

    setWoodpilesList(updatedList);

    // Update current score
    setCurrentScore((prevState) => prevState + 1);
  };

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      <Main woodpilesList={woodpilesList} onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
