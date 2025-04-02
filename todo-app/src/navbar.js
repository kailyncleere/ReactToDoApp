import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/todo" className="NavHome">To-Do List</a></li>
                <li><a href="/contact" className="NavContact">Contact</a></li>
            </ul>
        </nav>
    );
}