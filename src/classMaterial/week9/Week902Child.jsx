import React from 'react';

function Week902Child() {
  const funcOne = () => {
    alert('Hello Again');
  };

  return (
    <div>
      <button onClick={funcOne}>New click me</button>
    </div>
  );
}

export default Week902Child;
