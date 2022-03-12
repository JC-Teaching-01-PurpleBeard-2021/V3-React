import React from 'react';

function Week10_01_PropsChild(props) {
  // function Week10_01_PropsChild({ of all the props}) {
  // console.log(props);

  // Example that you cannot change props
  // props.name = 'John';

  // **** This is the wrong approach - do the map inside jsx****
  let listOfColours = '';

  props.arr.map((v) => {
    listOfColours += `<p>${v}</p>`;
  });

  return (
    <div>
      <p>
        {props.name} favour colour is{' '}
        <span style={{ color: props.colour }}>{props.colour}!!</span>
      </p>
      <p>My favour number is: {props.calc}</p>
      <h2>List of colours from the array</h2>
      {listOfColours}

      {props.arr.map((v) => (
        <p key={v}>{v}</p>
      ))}

      <p>
        My name is <span style={{ fontWeight: 'bold' }}>{props.obj.name}</span>{' '}
        I am <span style={{ fontWeight: 'bold' }}>{props.obj.age}</span> and I
        work as a <span style={{ fontWeight: 'bold' }}>{props.obj.job}</span>
      </p>

      <p>
        Number created from the function{' '}
        <span style={{ fontWeight: 'bold' }}>{props.func(4)}</span>
      </p>
    </div>
  );
}

export default Week10_01_PropsChild;
