import React, { useState } from 'react';

import CPNavBar from '../_CPNavBar';
import Project36_LoadScreen from './Project36_LoadScreen';
import Project36_GameScreen from './Project36_GameScreen';
import './Project36_Styles.css';

function Project36_Parent() {
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
        <h1>Project 36 - Wordle</h1>
        {loadScreen ? 
        <Project36_LoadScreen funcWordleProp={createWordle} /> : 
        <Project36_GameScreen wordleProp={wordle} resetWorldeProp={createWordle}/>}
      </div>
    </div>
  );
}

export default Project36_Parent;
