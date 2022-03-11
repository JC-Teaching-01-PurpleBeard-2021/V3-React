import React, { useState, useEffect } from 'react';
import CPNavBar from './_CPNavBar';

function Project34_useEffect() {
  const [data, setData] = useState(1);

  const firstLoad = true;
  let dataAPI;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => setRawData(json));
  }, [firstLoad]);

  const changeData = () => {
    setData((num) => (num === 1 ? 2 : 1));
  };

  const setRawData = (d) => {
    return (dataAPI = d);
  };

  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 34</h1>
        <h3>{dataAPI[data].name}</h3>
        <button
          onClick={changeData}
          style={{
            fontSize: '2rem',
          }}
        >
          {data === 1 ? 'Data 1' : 'Data 2'}
        </button>
      </div>
    </div>
  );
}

export default Project34_useEffect;
