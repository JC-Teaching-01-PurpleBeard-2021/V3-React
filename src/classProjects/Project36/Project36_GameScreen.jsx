import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import Project36_GuessRows from './Project36_GuessRows';

function Project36_GameScreen(props) {
  const [inputWordleG, setInputWordleG] = useState('');

  return (
    <div id="gameScreen">
      <label htmlFor="wordleGuess">Enter Your {props.guesses} Wordle Guess</label>
      <InputText required id="wordleGuess" maxLength="5" value={inputWordleG} onChange={(e) => setInputWordleG(e.target.value)} />
      <Button
        label="Submit"
        id="wordleGuessSubmit"
        className="p-button-warning"
        disabled={inputWordleG.length < 5}
        onClick={() => {
          props.funcCheck(inputWordleG);
        }}
      />
      <Project36_GuessRows guessWordle={props.guessWordle} check={props.check} />
    </div>
  );
}

export default Project36_GameScreen;
