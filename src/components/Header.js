import Button from "./Button"

const Header = ({ changeTaskForm, showAddTask }) => {
  return (
    <section className="header">
        <h1>Task Tracker</h1>
        <Button color={showAddTask ? "green": "red"} text={showAddTask ? "Collapse Task Input Form" : "Expand Task Input Form"}
        onClick={changeTaskForm} showAddTask={showAddTask}/>
    </section>
  )
}

export default Header