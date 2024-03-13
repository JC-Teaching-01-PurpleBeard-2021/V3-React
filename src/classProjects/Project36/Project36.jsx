import React, { useState } from 'react';

import nextId from 'react-id-generator';

import CPNavBar from '../_CPNavBar';
import Project36CreateTask from './Project36CreateTask';
import './Project36Styles.css';

function Project36() {
  const [tasks, setTasks] = useState([
    'Finish Redux Tutorials',
    'Learn more about Relay',
    'Build 5 more React apps',
  ]);

  // Delete Task
  const deleteTask = (i) => {
    const delItem = tasks[i];
    setTasks(tasks.filter((t) => t !== delItem));
  };

  // Add the New Task
  const createTask = (t) => {
    console.log(t);
    setTasks([t, ...tasks]);
  };

  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Project 36 - ToDo App</h1>
        <Project36CreateTask createTask={createTask} />
        <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            {tasks.map((t, i) => (
              <tr key={nextId()}>
                <td>{i + 1}.</td>
                <td>{t}</td>
                <td>
                  <i className="pi pi-trash" onClick={() => deleteTask(i)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project36;
