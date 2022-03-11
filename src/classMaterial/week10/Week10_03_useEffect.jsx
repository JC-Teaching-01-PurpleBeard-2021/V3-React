import React, { useState, useEffect } from 'react';
import CMNavBar from '../_CMNavBar';

function Week10_03_useEffect() {
  const [button, setButton] = useState(true);
  const [jsonData, updateData] = useState('hello');

  useEffect(() => {
    alert('Hello Class');
  });

  /*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/2')
      .then((response) => response.json())
      .then((json) => console.log(json));
    // .then((json) => updateJSON(json));
  });
  // }, [jsonData]);

  const updateJSON = (data) => {
    updateData(data.name);
  };
  */

  const changeButton = () => {
    setButton(!button);
  };

  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of useEffect</h1>
        <h3>{jsonData}</h3>
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
        <a href="https://jsonplaceholder.typicode.com/">Example JSON RestAPI</a>
      </div>
    </div>
  );
}

export default Week10_03_useEffect;
