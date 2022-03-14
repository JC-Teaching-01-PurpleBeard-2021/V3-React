import React from 'react';

function Project36_GuessRows(props) {
  console.log(props);

  // prettier-ignore
  return !props.check ? (
    <></>
  ) : (
    <ul>{props.guessWordle.map(() => {
      
    })}</ul>
  )
}

export default Project36_GuessRows;
