import React, { useState } from "react";  
import "./Kits.css";
import Maradona from "./assets/Drugs.jpg";
import Dinho from "./assets/dinho.jpg";
import Arsenal from "./assets/Gunners.jpg";
import Barca from "./assets/sixtuple.jpg";
import Cantona from "./assets/THE KING IS BACK.jpg";
import Zidane from "./assets/Zizou.jpg";
import Milan from "./assets/UN cONFIZZIONE.jpg";

const Kits = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const KitDrugs = {
        Name: "Napoli home kit Maradona 85/86",
        Price: "$250"
    }
    const KitDinho = {
        Name: "Dinho home kit 05/06",
        Price: "$300"
    }
    const KitArsenal = {
        Name: "Arsenal home kit 93/94",
        Price: "$350"
    }
    const KitBarca = {
        Name: "Barcelona home kit 08/09",
        Price: "$400"
    }
    const KitCantona = {
        Name: "Cantona home kit 96/97",
        Price: "$450"
    }
    const KitZidane = {
        Name: "Zidane home kit 93/94",
        Price: "$500"
    }
    const KitMilan = {
        Name: "Milan home kit 93/94",
        Price: "$550"
    }
    

    return (
        <div className="kits-container">
            <h1>Joga Bonito Retro</h1>
            <div>{user}</div>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <br />
                <div className="images-container"></div>
                <div className="kits"></div>
                    <img src={Maradona} alt="Maradona" />
                    

            </div>
        </div>
        
    );
};

export default Kits;