import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Kids from './Kids';
import Kits from './Kits';
import R9Barça from './R9Barça';
import R9Brazil from './R9Brazil';
import Romario from './Romario';
import Maradona from "./assets/Drugs.jpg";
import Dinho from "./assets/dinho.jpg";
import Arsenal from "./assets/Gunners.jpg";
import Sixtuple from "./assets/sixtuple.jpg";
import Cantona from "./assets/THE KING IS BACK.jpg";
import Maldini from "./assets/UN cONFIZZIONE.jpg";
import Zidane from "./assets/Zizou.jpg";
import Pele from "./assets/PeleBeck01.jpg";
import Cruyff from "./assets/Flying dutchman.jpg";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (email) => {
    setUser({ email });
  };

  const handleLogin = (email) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/kits">Kits</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/contact">Contact</Link>

        {/* Show Signup and Login only if user is NOT logged in */}
        {!user && (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {/* Show Logout if user IS logged in */}
        {user && (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/R9Barca" element={<R9Barça />} />
        <Route path="/R9Brazil" element={<R9Brazil />} />
        <Route path="/Romario" element={<Romario />} />
        <Route path="/Maradona" element={<Maradona />} />
        <Route path="/Dinho" element={<Dinho />} />
        <Route path="/Arsenal" element={<Arsenal />} />
        <Route path="/Sixtuple" element={<Sixtuple />} />
        <Route path="/Cruyff" element={<Cruyff />} />
        <Route path="/Pele" element={<Pele />} />
        <Route path="/Zidane" element={<Zidane />} />
        <Route path="/Maldini" element={<Maldini />} />
        <Route path="/Cantona" element={<Cantona />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;