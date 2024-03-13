import React from 'react';
import CMNavBar from '../_CMNavBar';

import Week1001PropsChild from './Week1001PropsChild';

function Week1001PropsParent() {
  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of Props</h1>
        <Week1001PropsChild
          name="Justin"
          colour="blue"
          calc={2 * 4}
          arr={['blue', 'green', 'red']}
          obj={{ name: 'Justin', job: 'teacher', age: 21 }}
          func={(a) => a * 2}
        />
      </div>
    </div>
  );
}

export default Week1001PropsParent;
