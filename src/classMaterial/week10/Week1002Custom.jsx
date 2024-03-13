import { useState } from 'react';

function Week1002Custom(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default Week1002Custom;
