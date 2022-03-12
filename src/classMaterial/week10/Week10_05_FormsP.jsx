import React, { useState } from 'react';
import CMNavBar from '../_CMNavBar';

function Week10_05_FormsP() {
  const [state, setState] = useState({ name: '', email: '' });
  const [btnState, setBtnState] = useState(true);

  const handleChange = (e) => {
    let updatedValue = {};
    if (e.target.name === 'name') {
      updatedValue = { name: e.target.value };
    } else {
      updatedValue = { email: e.target.value };
    }
    setState((s) => ({ ...s, ...updatedValue }));
    setBtnState(
      (b) => (b = state.name != '' && state.email != '' ? false : true)
    );
  };

  const createName = (e) => {
    e.preventDefault();
    // console.log(e);
    alert(`Hello ${state.name} & your email is: ${state.email}`);
    setState((s) => (s = { name: '', email: '' }));
  };

  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
        <h1>First Example of Forms</h1>
        <form onSubmit={createName}>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            value={state.name}
            name="name"
            id="name"
            onChange={handleChange}
          />{' '}
          <br />
          <br />
          <label htmlFor="email">email</label> <br />
          <input
            type="email"
            value={state.email}
            name="email"
            id="email"
            onChange={handleChange}
          />{' '}
          <br />
          <br />
          <button type="submit" disabled={btnState}>
            Submit
          </button>
        </form>

        <h3>Your Name is: {state.name}</h3>
      </div>
    </div>
  );
}

export default Week10_05_FormsP;
