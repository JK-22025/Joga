// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
<<<<<<< HEAD
=======
import Kids from './Kids';
import Kits from './Kits';
>>>>>>> e28297f (jogaretro)

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (email) => {
    setUser({ email });
  };

  const handleLogin = (email) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);  // Clear user state on logout
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Kits">Kits</Link>
        <Link to="/Kids">Kids</Link>
        <Link to="/Contact">Contact</Link>
<<<<<<< HEAD
      </nav>
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
=======
        <Link to ="/signup">Signup</Link>
        <Link to ="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route
          path="/login"
          element={user ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/kits" element={<Kits />} />

>>>>>>> e28297f (jogaretro)
      </Routes>
    </Router>
    
  );
};

export default App;
