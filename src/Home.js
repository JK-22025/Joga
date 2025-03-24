import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import myImage from './assets/1.jpg';
import myImage2 from './assets/2.jpg';
import myImage3 from './assets/3.jpg';

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
  const kitDetails2 = {
    Name: "Brazil home kit Ronaldo Nazario world cup 98",
    Price: "$155"
  }
  const kitDetails3 = {
    Name: "Brazil home kit Romario world cup 94",
    Price: "$155"
  }

  return (
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

  
      <div className="image-container">
  <div className="kits-row">
    <div className="kit">
      <img src={myImage} alt="R9 Kit" className="kit-image" />
      <div className="kit-details">
        <Link to={`/R9Barca`}>
          <p className="kit-description">{kitDetails.Description}</p>
          <p className="kit-price">{kitDetails.Price}</p>
        </Link>
      </div>
    </div>

    <div className="kit">
      <img src={myImage2} alt="Ronaldo Brazil 98 Kit" className="kit-image" />
      <div className="kit-details">
        <Link to={`/${kitDetails2.id}`}>

        
          <p className="kit-name">{kitDetails2.Name}</p>
          <p className="kit-price">{kitDetails2.Price}</p>
        </Link>
      </div>
    </div>

    <div className="kit">
      <img src={myImage3} alt="Romario Brazil 94 Kit" className="kit-image" />
      <div className="kit-details">
        <Link to={`/${kitDetails3.id}`}>
          <p className="kit-name">{kitDetails3.Name}</p>
          <p className="kit-price">{kitDetails3.Price}</p>
        </Link>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Home;