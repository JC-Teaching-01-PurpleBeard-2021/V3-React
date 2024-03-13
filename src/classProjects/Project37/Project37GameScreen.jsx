import React, { useState } from 'react';
import nextId from 'react-id-generator';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import Project37GuessRows from './Project37GuessRows';

function Project37GameScreen(props) {
  // ----------------------------------------------------------------------------------
  // inputted word
  const [inputWordleG, setInputWordleG] = useState('');

  // Guessed Wordles, record attempt, what is right and what is wrong
  const [guessWordleState, setGuessWordleState] = useState([]);

  // Attempts
  const [guesses, setGuesses] = useState(1);
  // ----------------------------------------------------------------------------------

  // Checks the guess to see if correct, if not runs function setGuess
  const checkWordle = () => {
    if (inputWordleG === props.wordleProp) {
      alert(
        `You are a winner you guessed ${props.wordleProp} on your ${guesses} attempt.`
      );
      props.resetWorldeProp('');
      setGuesses(1);
    } else {
      updateGuess();
    }
  };

  // Map through Wordle again Guessed Wordle to see what is right
  const updateGuess = () => {
    const checkedArr = [];
    for (let i = 0; i < props.wordleProp.length; i++) {
      if (props.wordleProp[i] === inputWordleG[i]) {
        checkedArr.push(true);
      } else if (props.wordleProp.includes(inputWordleG[i])) {
        checkedArr.push('exists');
      } else {
        checkedArr.push(false);
      }
    }

    setGuessWordleState([
      ...guessWordleState,
      {
        key: guesses,
        guess: inputWordleG,
        check: checkedArr,
      },
    ]);

    // console.log(props.wordleProp);
    // console.log(guessWordle);

    setGuesses(guesses + 1);
  };

  return (
    <div id="gameScreen">
      <div className="guessInput">
        <label htmlFor="wordleGuess">Enter Your {guesses} Wordle Guess</label>
        <InputText
          required
          id="wordleGuess"
          maxLength="5"
          value={inputWordleG}
          onChange={(e) => setInputWordleG(e.target.value.toUpperCase())}
        />
        <Button
          label="Submit"
          id="wordleGuessSubmit"
          className="p-button-warning"
          disabled={inputWordleG.length < 5}
          onClick={checkWordle}
        />
      </div>
      {guessWordleState.length ? (
        guessWordleState.map((gw) => (
          <Project37GuessRows guessWordle={gw} key={nextId()} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Project37GameScreen;
