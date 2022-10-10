import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDolist from './ToDolist'
import Menu from './Menu.js'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="h2 display-6 ">What Do you want to add ?</h1>
      <ToDolist></ToDolist>
    </div>
  );
}

export default App;
