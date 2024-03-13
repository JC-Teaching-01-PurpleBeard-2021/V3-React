import React, { useState } from 'react';
import nextId from 'react-id-generator';
import CMNavBar from '../_CMNavBar';

import Week1004EventsC from './Week1004EventsC';

function Week1004Events() {
  const [backColour, setBackColour] = useState('Aquamarine');
  const [btnState, setBtnState] = useState(true);
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const updateColour = () => {
    let updateColour =
      backColour === 'Aquamarine' ? 'DarkGoldenRod' : 'Aquamarine';
    setBackColour((bc) => (bc = updateColour));
    setBtnState(!btnState);
  };

  const updateColour2 = (col) => {
    setBackColour((bc) => (bc = col));
  };

  const remove = (num) => {
    console.log(num);
    setNums((v) => v.filter((n) => n !== num));
  };

  const getnumsList = () => {
    let numsList = nums.map((n) => (
      <Week1004EventsC key={nextId()} value={n} remove={remove} />
    ));
    return numsList;
  };

  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <div style={{ height: '100vh', backgroundColor: backColour }}>
          <h1>React Events</h1>
          <br />
          <a href="https://reactjs.org/docs/events.html" target="blank">
            React events
          </a>
          <br />
          <br />
          <img
            src="https://images.pexels.com/photos/9818360/pexels-photo-9818360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="wall"
            width={'150px'}
            onMouseEnter={updateColour}
          />
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              updateColour2('blue');
            }}
          >
            change the colour to blue
          </button>
          <br />
          <br />
          <br />
          <button disabled={btnState}>
            {btnState ? 'I am not working...:-(' : 'I am all better now!!'}
          </button>
          <h2>Passing method to child</h2>
          <ul>{getnumsList()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Week1004Events;
