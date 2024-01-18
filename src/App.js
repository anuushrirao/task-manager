import { useState } from 'react';
import './App.scss';
import Header from './Header';
import Task from './NewTask/Task'
import TaskItem from './TaskItem/TaskItem';


function App() {

  const [buttonState,setButtonState] =useState("close")
  return (
    <div className="App">
      <Header setButtonState={setButtonState}/>
      <Task currentButtonState={buttonState} />
      
    </div>
  );
}

export default App;
