import Header from './components/Header';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Vacuum",
      day: "May 6th at 5:00PM",
      reminder: true
    }
  ]) 
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const onDelete = () => { 

  }
  return (
    <div className="App">
      <Header/>     
      <AddTasks/>
      <Tasks onDelete={onDelete} task={tasks}/>
    </div>
  );
}

export default App;
