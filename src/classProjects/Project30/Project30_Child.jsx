import React from 'react';

function Project30_Child() {
  const printName = () => {
    alert('Justin');
  };
  return (
    <div>
      <button onClick={printName}>Click Me!</button>
    </div>
  );
}

export default Project30_Child;
