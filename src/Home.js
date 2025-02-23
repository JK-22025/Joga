import React, { useState } from 'react';
import './Home.css';
import myImage from './assets/1.jpg';


const Home = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="home-container">
        <div className="logo">Joga Bonito Retro</div>
        <div className="welcome-message">Welcome, {user.email}!</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <br />
        <div>
          <img style={{ width: '100%', height: '100px' }} src={myImage} alt="My Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;