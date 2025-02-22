// Home.js
import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar.js';
<<<<<<< HEAD

const Home = ({ user }) => {
=======
import myImage from './assets/1.jpg';

const Home = () => {
>>>>>>> e28297f (jogaretro)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
<<<<<<< HEAD
    <div className="home-container">
      <div className="logo">Joga Bonito Retro</div>
      <div className="welcome-message">Welcome, {user.email}!</div>
=======
    <div>
    <div className="home-container">
      <div className="logo">Joga Bonito Retro</div>
      

>>>>>>> e28297f (jogaretro)
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
<<<<<<< HEAD
      </div>
=======
    </div>
        <br />
       
        <div>
          <img style={{ width: '100px', height: '100px' }} src={myImage} alt="My Image" />
        </div>
      </div>
    
>>>>>>> e28297f (jogaretro)
    </div>
  );
};
export default Home;
