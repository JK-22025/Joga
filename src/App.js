import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Kids from './Kids';
import Kits from './Kits';
import R9Barça from './R9Barça';
import R9Brazil from './R9Brazil';
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
        <Route path= "/R9Brazil" element={<R9Brazil />} />
        
      </Routes>
    </Router>
  );
};

export default App;