import React, { useState, useEffect } from 'react';

import CPNavBar from '../_CPNavBar';
import Project36_LoadScreen from './Project36_LoadScreen';
import Project36_GameScreen from './Project36_GameScreen';
import './Project36_Styles.css';

function Project36_Parent() {
  const [loadScreen, setLoadScreen] = useState(true);
  const [wordle, setWordle] = useState('');
  const [guessWordle, setGuessWordle] = useState([]);
  const [guesses, setGuesses] = useState(1);
  const [check, setCheck] = useState([]);

  const createWordle = (w) => {
    console.log(w);
    setWordle(w);
    setLoadScreen(false);
  };

  const checkWordle = (cw) => {
    if (cw === wordle) {
      setCheck([true, true, true, true, true]);
    }
    setGuess(cw);
  };

  const setGuess = (guess) => {
    setGuessWordle(() => guessWordle.push(guess));
    setGuesses(guesses + 1);
  };

  return (
    // prettier-ignore
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 36 - Wordle</h1>
        {loadScreen ? 
        <Project36_LoadScreen funcWordle={createWordle} /> : 
        <Project36_GameScreen guesses={guesses} guessWordle={guessWordle} check={check} funcCheck={checkWordle} />}
      </div>
    </div>
  );
}

export default Project36_Parent;
