import Button from "./Button"

const Header = ({ changeTaskForm }) => {
  return (
    <section className="header">
        <h1>Task Tracker</h1>
        <Button color='black' text="Collapse Task Input Form" onClick={changeTaskForm}/>
    </section>
  )
}

export default Header