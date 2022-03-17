import React from 'react';

function Project36_GuessRows(props) {
  // console.log(props.guessWordle);
  let rowText = [];

  for (let i = 0; i < 5; i++) {
    if (props.guessWordle.check[i] === 'exists') {
      rowText.push(
        <span className="letter existsLetter">
          {props.guessWordle.guess[i]}
        </span>
      );
    } else if (props.guessWordle.check[i]) {
      rowText.push(
        <span className="letter trueLetter">{props.guessWordle.guess[i]}</span>
      );
    } else {
      rowText.push(
        <span className="letter falseLetter">{props.guessWordle.guess[i]}</span>
      );
    }
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
