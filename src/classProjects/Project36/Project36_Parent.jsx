import React, { useState, useEffect } from 'react';

import CPNavBar from '../_CPNavBar';
import Project36_LoadScreen from './Project36_LoadScreen';
import Project36_GameScreen from './Project36_GameScreen';
import './Project36_Styles.css';

function Project36_Parent() {
  // Toggle between loadscreen and game screen
  const [loadScreen, setLoadScreen] = useState(true);
  // The wordle
  const [wordle, setWordle] = useState('');
  // Guessed Wordles, record attempt, what is right and what is wrong
  const [guessWordle, setGuessWordle] = useState([]);
  // Attempts
  const [guesses, setGuesses] = useState(1);

  // Creates the Wordle word
  const createWordle = (w) => {
    setWordle(w.toUpperCase());
    setLoadScreen(false);
  };

  // Checks the guess to see if correct, if not runs function setGuess
  const checkWordle = (cw) => {
    setLoadScreen(true);
    let checkWord = cw.toUpperCase();
    if (checkWord === wordle) {
      alert(
        `You are a winner you guessed ${wordle} on your ${guesses} attempt.`
      );
      setWordle('');
      setGuessWordle([]);
      setGuesses(1);
    } else {
      updateGuess(checkWord);
    }
  };

  // Map through Wordle again Guessed Wordle to see what is right
  const updateGuess = (guess) => {
    const checkedArr = [];
    for (let i = 0; i < wordle.length; i++) {
      if (wordle[i] === guess[i]) {
        checkedArr.push(true);
      } else if (wordle.includes(guess[i])) {
        checkedArr.push('exists');
      } else {
        checkedArr.push(false);
      }
    }

    setGuessWordle((gw) =>
      // gw.push({
      //   attemptId: guesses,
      //   guess: guess,
      //   check: checkedArr,
      // })
      gw.push('test')
    );

    setGuesses((g) => g + 1);
    setLoadScreen(false);

    console.log('guesses', guesses);
    console.log('guessWordle', guessWordle);
  };

  return (
    // prettier-ignore
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 36 - Wordle</h1>
        {loadScreen ? 
        <Project36_LoadScreen funcWordleProp={createWordle} /> : 
        <Project36_GameScreen wordStartProp='' guessesProp={guesses} guessWordleProp={guessWordle} funcCheckProp={checkWordle} />}
      </div>
    </div>
  );
}

export default Project36_Parent;
