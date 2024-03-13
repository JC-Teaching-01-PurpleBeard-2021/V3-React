import React from 'react';

function Week1004EventsC(props) {
  return (
    <li id={props.value}>
      {props.value}
      <button
        onClick={() => {
          props.remove(props.value);
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default Week1004EventsC;
