import React from 'react';
import { NavLink } from 'react-router-dom';

function CPNavBar() {
  return (
    // prettier-ignore
    <nav className="sidenav CPNav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project30">
              Project 30
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project31">
              Project 31
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project32">
              Project 32
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project33">
              Project 33
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project34">
              Project 34
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project35">
              Project 35
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project36">
              Project 36
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project37">
              Project 37
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default CPNavBar;
