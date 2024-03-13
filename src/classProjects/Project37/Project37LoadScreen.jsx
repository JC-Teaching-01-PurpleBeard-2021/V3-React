import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Project37LoadScreen(props) {
  const [inputWordle, setInputWordle] = useState('');

  return (
    <div id="loadScreen">
      <label htmlFor="wordle">Create Wordle</label>
      <InputText
        required
        id="wordle"
        maxLength="5"
        value={inputWordle}
        onChange={(e) => setInputWordle(e.target.value.toUpperCase())}
      />
      <Button
        label="Submit"
        id="wordleSubmit"
        className="p-button-success"
        disabled={inputWordle.length < 5}
        onClick={() => {
          props.funcWordleProp(inputWordle);
        }}
      />
    </div>
  );
}

export default Project37LoadScreen;
