import Header from './components/Header';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
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

  const onDelete = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header changeTaskForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>     
      { showAddTask && <AddTasks onAdd={addTask}/>}
      <Tasks onDelete={onDelete} tasks={tasks}/>
    </div>
  );
}

export default App;
