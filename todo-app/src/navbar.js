import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="NavHome">To-Do List</Link></li>
        <li><Link to="/contact" className="NavContact">Contact</Link></li>
      </ul>
    </nav>
  );
}
