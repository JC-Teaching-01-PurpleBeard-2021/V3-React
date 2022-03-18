import React from 'react';
import nextId from 'react-id-generator';

function Project36_GuessRows(props) {
  // console.log(props.guessWordle);
  let rowText = [];

  for (let i = 0; i < 5; i++) {
    let classAssign =
      props.guessWordle.check[i] === 'exists'
        ? 'existsLetter'
        : props.guessWordle.check[i]
        ? 'trueLetter'
        : 'falseLetter';
    rowText.push(
      <span className={'letter ' + classAssign} key={nextId()}>
        {' '}
        {props.guessWordle.guess[i]}
      </span>
    );
  }

  return (
    <div
      className="guessRows"
      id={props.guessWordle.key}
      key={props.guessWordle.key}
    >
      {rowText}
    </div>
  );
}

export default Project36_GuessRows;
