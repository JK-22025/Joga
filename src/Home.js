import React, { useState } from 'react';
import './Home.css';
import myImage from './assets/1.jpg';
import myimage from './assets/2.jpg';
import myimage3 from './assets/3.jpg';

const Home = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const kitDetails = {
    Name: "Barcelona away kit Ronaldo Nazario 96/97",
    Price: "$150",
    Season: "96/97",
    Description: "Ronaldo Nazario 96/97 Barcelona away kit"
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
        <div className= "image-container">
          <img src={myImage} alt="Joga Bonito Retro" />
          <img src={myimage} alt="Joga Bonito Retro" />
          <img src={myimage3} alt="Joga Bonito Retro" />
          
        </div>
        <div className="kit-details">
          <p className="price">Price: {kitDetails.Price}</p>
          <p className="season">Season: {kitDetails.Season}</p>
          <p className="description">Description: {kitDetails.Description}</p>
        </div>
          
      </div>
      
       
    </div>
  );
};

export default Home;