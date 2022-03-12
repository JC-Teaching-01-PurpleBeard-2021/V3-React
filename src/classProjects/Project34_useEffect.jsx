import React, { useState, useEffect } from 'react';
import CPNavBar from './_CPNavBar';

function Project34_useEffect() {
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const changeData = () => {
    setDataId((num) => (num === 1 ? 2 : 1));
  };

  // console.log(data);

  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 34</h1>
        <h3>{data[dataId].title}</h3>
        <button
          onClick={changeData}
          style={{
            fontSize: '2rem',
          }}
        >
          {dataId === 1 ? 'Data 1' : 'Data 2'}
        </button>
      </div>
    </div>
  );
}

export default Project34_useEffect;
