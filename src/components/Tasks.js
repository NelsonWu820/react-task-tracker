import TaskTemplate from "./TaskTemplate"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskTemplate key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default Tasks