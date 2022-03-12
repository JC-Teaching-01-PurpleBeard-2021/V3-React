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
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_01">
              W10 - Props
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_02">
              W10 - useState
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_03">
              W10 - useEffect
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_04">
              W10 - Events
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_05">
              W10 - Forms
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default CMNavBar;
