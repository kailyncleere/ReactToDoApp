import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import Navbar from './navbar';
import Contact from './contact';

function App() {
let component
  switch (window.location.pathname) {
    case '/':
      component = <ToDoList />;
      break;
    case '/contact':
      component = <Contact />;
      break;
    default:
      component = <ToDoList />;
  }
  return (
    <div className="body">
      {}
      <Navbar />
    <div className="Container">
    {component} {}
    </div>
    </div>
  );
}

export default App;

