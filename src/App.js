import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Kids from './Kids';
import Kits from './Kits';
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
      <nav id ="navbar">
        <Link to="/">Home</Link>
        <Link to="/Kits">Kits</Link>
        <Link to="/Kids">Kids</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
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
      </Routes>
    </Router>
  );
};

export default App;