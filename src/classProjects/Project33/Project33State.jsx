import React, { useState } from 'react';
import CPNavBar from '../_CPNavBar';

function Project33State() {
  const [colour, setColour] = useState('blue');

  const updateColour = () => {
    setColour((col) => (col === 'blue' ? 'red' : 'blue'));
  };

  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 33</h1>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: colour }}>{colour}</h1>
          <br />
          <button onClick={updateColour}>click me!! click me!</button>
        </div>
      </div>
    </div>
  );
}

export default Project33State;
