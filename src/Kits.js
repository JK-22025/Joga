import React, { useState } from "react";
import "./Kits.css";
import Maradona from "./assets/Drugs.jpg";
import Dinho from "./assets/dinho.jpg";
import Arsenal from "./assets/Gunners.jpg";
import Barca from "./assets/sixtuple.jpg";
import Cantona from "./assets/THE KING IS BACK.jpg";
import Zidane from "./assets/Zizou.jpg";
import Milan from "./assets/UN cONFIZZIONE.jpg";

const Kits = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const kits = [
        { id: 1, image: Maradona, name: "Napoli home kit Maradona 85/86", price: "$250" },
        { id: 2, image: Dinho, name: "Dinho home kit 05/06", price: "$300" },
        { id: 3, image: Arsenal, name: "Arsenal home kit 93/94", price: "$350" },
        { id: 4, image: Barca, name: "Barcelona home kit 08/09", price: "$400" },
        { id: 5, image: Cantona, name: "Cantona home kit 96/97", price: "$450" },
        { id: 6, image: Zidane, name: "Zidane home kit 93/94", price: "$500" },
        { id: 7, image: Milan, name: "Milan home kit 93/94", price: "$550" }
    ];

    return (
        <div className="kits-container">
            <h1>Joga Bonito Retro</h1>

            {/* Search Bar */}
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* Kits Grid */}
            <div className="kits-row">
                {kits
                    .filter((kit) => kit.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((kit) => (
                        <div className="kit" key={kit.id}>
                            <img src={kit.image} alt={kit.name} className="kit-image" />
                            <div className="kit-details">
                                <p className="kit-name">{kit.name}</p>
                                <p className="kit-price">{kit.price}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Kits;