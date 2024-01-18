import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Task.scss';

const Task = ({ currentButtonState }) => {
  const [formDisplay, setFormDisplay] = useState('flex');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');

  useEffect(() => {
    if (currentButtonState === 'close') {
      setFormDisplay('flex');
    } else {
      setFormDisplay('none');
    }
  }, [currentButtonState]);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      date: taskDate,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName('');
    setTaskDate('');
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <form style={{ display: formDisplay }} onSubmit={handleTaskSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Day & Time</label>
        <input
          type="text"
          id="date"
          placeholder="Enter Date and Time"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />


        <input type="submit" value="Submit" />
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.date}</p>
            <DeleteIcon onClick={() => handleTaskDelete(task.id)} />
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Task;
