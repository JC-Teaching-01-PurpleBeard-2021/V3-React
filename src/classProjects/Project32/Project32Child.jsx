import React from 'react';

function Project32Child(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'red' }}>{props.someText}</h2>
      <br />
      <label htmlFor="colourList">List of colours: </label>
      <select name="colourList" id="colourList">
        {props.arr.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Project32Child;
