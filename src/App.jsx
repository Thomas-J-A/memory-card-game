import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import woodpiles from './components/woodpiles';
import { hasClicked, resetHasClickedValues } from './utils';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [woodpilesList, setWoodpilesList] = useState(woodpiles);

  // Enables use of current state in useEffect
  // cleanup function (otherwise, previous state
  // is encapsulated and used
  const ref = useRef();
  ref.current = currentScore;

  useEffect(() => {
    // Update high score and alert user
    let timeoutId;

    if (currentScore > highScore) {
      setHighScore(currentScore);
      setAlertVisible(true);
      timeoutId = setTimeout(() => {
        setAlertVisible(false);
      }, 1500);
    }

    return () => {
      // TODO: && alertVisible === true (for efficiency)
      if (ref.current !== 0) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentScore]);

  useEffect(() => {
    // Shuffle images around
    const shuffled = woodpilesList
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setWoodpilesList(shuffled);
  }, [currentScore]);

  useEffect(() => {
    // Flash red after an incorrect choice
    if (currentScore === 0 && highScore > 0) {
      document.querySelector('main').classList.add('restart-flash');
    }

    return () => document.querySelector('main').classList.remove('restart-flash');
  }, [currentScore]);

  const handleClick = (id) => {
    // Check if image has already been clicked
    if (hasClicked(woodpilesList, id)) {
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
      <Header currentScore={currentScore} highScore={highScore} alertVisible={alertVisible} />
      <Main woodpilesList={woodpilesList} onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
