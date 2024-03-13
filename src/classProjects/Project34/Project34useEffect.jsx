import React, { useState, useEffect } from 'react';
import CPNavBar from '../_CPNavBar';

function Project34useEffect() {
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataAPI = await res.json();
    setData(dataAPI);
    setLoading(false);
  }, []);

  const changeData = () => {
    setDataId((num) => (num === 1 ? 2 : 1));
  };

  // console.log(data);

  return loading ? (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 34</h1>
      </div>
    </div>
  ) : (
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

export default Project34useEffect;
