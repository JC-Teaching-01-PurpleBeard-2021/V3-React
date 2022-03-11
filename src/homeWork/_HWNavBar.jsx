import React from 'react';
import { NavLink } from 'react-router-dom';

function HWNavBar() {
  return (
    // prettier-ignore
    <nav className="sidenav HWNav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/week9">
              HW_Week 9
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/week10">
              HW_Week 10
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default HWNavBar;
