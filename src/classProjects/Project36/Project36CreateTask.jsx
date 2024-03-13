import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Project36CreateTask(props) {
  const [taskInput, setTaskInput] = useState('');

  return (
    <div id="taskInput">
      <label htmlFor="task">Create Task</label>
      <InputText
        required
        id="task"
        maxLength="5"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button
        label="Submit"
        id="taskSubmit"
        className="p-button-success"
        disabled={taskInput.length < 1}
        onClick={() => {
          props.createTask(taskInput);
        }}
      />
    </div>
  );
}

export default Project36CreateTask;
