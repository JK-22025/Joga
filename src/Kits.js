import React, { useState } from "react";  
import "./Kits.css";


const Kits = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="kits-container">
            <h1>Joga Bonito Retro</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default Kits;