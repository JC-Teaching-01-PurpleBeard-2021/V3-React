import React, { useState } from 'react';
import Week10_02_Custom from './Week10_02_Custom';

import CMNavBar from '../_CMNavBar';

function Week10_02_useState() {
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(true);
  // 1. Reference the current state
  // 2. Function (callback to you update state)

  const increment = () => {
    setCount(count + 1);
  };

  // Local Hook
  const changeButton = () => {
    setButton(!button);
  };

  /*
  // Custom Hook
  const [button, changeButton] = Week10_02_Custom(true);
  */

  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of State</h1>
        <h2>Example 1</h2>
        <h3>The count is currently: {count}</h3>
        <button onClick={increment}>Add 1 to the count</button>
        <br />
        <br />
        <h2>Example 2</h2>
        <p hidden={!button}>Hi I am some text</p>
        <button
          onClick={changeButton}
          style={{
            backgroundColor: button ? 'green' : 'red',
            fontSize: '2rem',
          }}
        >
          {button ? 'Active' : 'In-Active'}
        </button>
        <br />
        <br />
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
          Hooks Docs
        </a>
      </div>
    </div>
  );
}

export default Week10_02_useState;
