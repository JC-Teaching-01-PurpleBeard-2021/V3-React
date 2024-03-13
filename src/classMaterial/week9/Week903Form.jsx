import React from 'react';
import { InputText } from 'primereact/inputtext';

import CMNavBar from '../_CMNavBar';

function Week903Form() {
  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <form action="#">
          <label htmlFor="firstName">FirstName: </label>
          <InputText required id="firstName" />
          {/* <input type="text" name="firstName" /> */}
          <br />
          <label htmlFor="firstName">LastName: </label>
          <input type="text" name="lastName" />
          <br />
          <button type="submit">Hello Click Me Now</button>
        </form>
      </div>
    </div>
  );
}

export default Week903Form;
