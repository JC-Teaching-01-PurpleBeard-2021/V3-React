import React from 'react';
import CPNavBar from './_CPNavBar';

import Project32_Child from './Project32_Child';

function Project32_Parent() {
  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 32</h1>
        <Project32_Child
          someText="Justin's work for Project 32"
          arr={['blue', 'green', 'red']}
        />
      </div>
    </div>
  );
}

export default Project32_Parent;
