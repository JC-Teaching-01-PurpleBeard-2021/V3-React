import React from 'react';
import { NavLink } from 'react-router-dom';

function CMNavBar() {
  return (
    // prettier-ignore
    <nav className="sidenav CMNav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_01">
              W9 - First App
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_02">
              W9 - JSX
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_03">
              W9 - Form
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default CMNavBar;
