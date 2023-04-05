import Header from './components/Header';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Header/>     
      <AddTasks/>
      <Tasks/>
    </div>
  );
}

export default App;
