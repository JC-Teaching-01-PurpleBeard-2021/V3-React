import { useState } from 'react';

function Week10_02_Custom(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default Week10_02_Custom;
