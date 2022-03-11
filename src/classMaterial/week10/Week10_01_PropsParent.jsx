import React from 'react';
import CMNavBar from '../_CMNavBar';

import Week10_01_PropsChild from './Week10_01_PropsChild';

function Week10_01_PropsParent() {
  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of Props</h1>
        <Week10_01_PropsChild
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

export default Week10_01_PropsParent;
