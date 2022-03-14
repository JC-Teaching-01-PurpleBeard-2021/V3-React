import React, { useState, useEffect } from 'react';
import CMNavBar from '../_CMNavBar';

function Week10_03_useEffect() {
  const [button, setButton] = useState(true);
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    alert('Hello Class');
  });

  // useEffect(async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  //   const data = await response.json();
  //   // console.log(data);
  //   setJsonData(data);
  //   setLoading(false);
  // }, []);

  const changeButton = () => {
    setButton(!button);
  };

  // Here we are wrapping the hole return with ternary operator so we see '...loading' until the data is loaded
  return loading ? (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>...Loading</h1>
      </div>
    </div>
  ) : (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of useEffect</h1>
        <h3>{jsonData[button ? 0 : 1].name}</h3>
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
