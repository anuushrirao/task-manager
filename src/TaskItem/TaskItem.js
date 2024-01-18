// TaskItem.js
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './TaskItem.scss';

const TaskItem = () => {
  return (
    <div className='task-item'>
      <h2>Grocery shopping</h2>
      <p>Saturday by 10am</p>
      <IconButton className='delete-icon'>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TaskItem;
