import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import Navbar from './navbar';
import Contact from './contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div className="Container">
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

