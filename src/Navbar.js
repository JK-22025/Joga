import React from "react"; 
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
     <nav className="navbar">
        <ul className="nav-links">
            <li><Link to="/">Homeddd</Link></li>
            <li><Link to="/Kits">Kits</Link></li>
            <li><Link to="/Kids">Kids</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
     </nav>
     
    );
}

export default Navbar;