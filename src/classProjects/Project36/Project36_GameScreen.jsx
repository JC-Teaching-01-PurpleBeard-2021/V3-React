import React, { useEffect, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import Project36_GuessRows from './Project36_GuessRows';

function Project36_GameScreen(props) {
  const [inputWordleG, setInputWordleG] = useState('');

  useEffect(() => {
    setInputWordleG(props.wordStartProp);
  }, [props.wordStartProp]);

  return (
    <div id="gameScreen">
      <label htmlFor="wordleGuess">
        Enter Your {props.guessesProp} Wordle Guess
      </label>
      <InputText
        required
        id="wordleGuess"
        maxLength="5"
        value={inputWordleG}
        onChange={(e) => setInputWordleG(e.target.value)}
      />
      <Button
        label="Submit"
        id="wordleGuessSubmit"
        className="p-button-warning"
        disabled={inputWordleG.length < 5}
        onClick={() => {
          props.funcCheckProp(inputWordleG);
        }}
      />
      <Project36_GuessRows guessWordle={props.guessWordleProp} />
    </div>
  );
}

export default Project36_GameScreen;
