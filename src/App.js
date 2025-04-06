import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Kids from './Kids';
import Kits from './Kits';
import Maradona from './Maradona';
import R9Barca from './R9Barca';
import R9Brazil from './R9Brazil';
import Romario from './Romario';
import Dinho from './Dinho';
import Arsenal from './Arsenal';
import Sixtuple from './Sixtuple';
import Cantona from './Cantona';
import Maldini from './Maldini';
import Zidane from './Zidane';
import Pele from './Pele';
import Cruyff from './Cruyff';
import Maradonakids from './Maradonakids';
import Dinhokids from './Dinhokids';
import Arsenalkids from './Arsenalkids';
import Sixtuplekids from './Sixtuplekids';
import Cantonakids from './Cantonakids';
import Maldinikids from './Maldinikids';
import Zidanekids from './Zidanekids';
import Pelekids from './Pelekids';
import Cruyffkids from './Cruyffkids';
import { useCart } from './Cart';
import Cart from './Cart';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const { cartItems } = useCart();

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
        <Link to="/cart" className="cart-icon-link" style={{ position: 'relative', marginLeft: 'auto' }}>
          <FaShoppingCart size={20} />
          {cartItems.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-10px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              fontSize: '12px',
              padding: '2px 6px'
            }}>
              {cartItems.length}
            </span>
          )}
        </Link>
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
        <Route path="/R9Barca" element={<R9Barca />} />
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
        <Route path="/Maradonakids" element={<Maradonakids />} />
        <Route path="/Dinhokids" element={<Dinhokids />} />
        <Route path="/Arsenalkids" element={<Arsenalkids />} />
        <Route path="/Sixtuplekids" element={<Sixtuplekids />} />
        <Route path="/Cantonakids" element={<Cantonakids />} />
        <Route path="/Maldinikids" element={<Maldinikids />} />
        <Route path="/Zidanekids" element={<Zidanekids />} />
        <Route path="/Pelekids" element={<Pelekids />} />
        <Route path="/Cruyffkids" element={<Cruyffkids />} />
        <Route path="/Cart" element={<Cart />} />


        
        
      </Routes>
    </Router>
  );
};

export default App;