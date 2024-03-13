import React, { useState } from 'react';

import CPNavBar from '../_CPNavBar';
import Project37LoadScreen from './Project37LoadScreen';
import Project37GameScreen from './Project37GameScreen';
import './Project37Styles.css';

function Project37() {
  // Toggle between loadscreen and game screen
  const [loadScreen, setLoadScreen] = useState(true);
  // The wordle
  const [wordle, setWordle] = useState('');

  // Creates the Wordle word
  const createWordle = (w) => {
    setWordle(w);
    setLoadScreen(!loadScreen);
  };

  return (
    // prettier-ignore
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 37 - Wordle</h1>
        {loadScreen ? 
        <Project37LoadScreen funcWordleProp={createWordle} /> : 
        <Project37GameScreen wordleProp={wordle} resetWorldeProp={createWordle}/>}
      </div>
    </div>
  );
}

export default Project37;
