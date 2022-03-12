import React from 'react';

function Week10_04_EventsC(props) {
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

export default Week10_04_EventsC;
