import React from 'react';

import CPNavBar from '../_CPNavBar';
import Project30Child from './Project30Child';
import './Project30Styles.css';

function Project30Parent() {
  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1 style={{ color: 'red' }}>Hello Class</h1>
        <p className="testClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime, ea eum atque ex provident voluptas tempora dolor veritatis? Labore necessitatibus, minus et porro commodi harum architecto eveniet illo? Quisquam.</p>
        <Project30Child />
        <h2 style={{ color: 'green', fontSize: '5rem' }}>Hello Sergio</h2>
      </div>
    </div>
  );
}

export default Project30Parent;
