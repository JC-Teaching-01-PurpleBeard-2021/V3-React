import React from 'react';

import CMNavBar from '../_CMNavBar';
import Week902Child from './Week902Child';
import './Week902Style.css';

function Week902Parent() {
  let firstVar = 'First Word';
  let firstVar2 = 'Second Word';

  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1 style={{ color: 'red' }}>Hello One More Time!!</h1>
        <h2 id="testIDLocal">{firstVar}</h2>
        <h3 className="testClass">{firstVar2}</h3>
        <br />
        <button onClick={handleClick}>click me</button>
        <br />
        <br />
        <Week902Child />
      </div>
    </div>
  );
}

export default Week902Parent;
