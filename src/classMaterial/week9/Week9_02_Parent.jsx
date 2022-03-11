import React from 'react';

import CMNavBar from '../_CMNavBar';
import Week9_02_Child from './Week9_02_Child';
import './Week9_02_Style.css';

function Week9_02_Parent() {
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
        <Week9_02_Child />
      </div>
    </div>
  );
}

export default Week9_02_Parent;
