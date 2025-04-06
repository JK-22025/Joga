import React, { useState } from "react";
import "./Kids.css";
import Maradona from "./assets/Drugs.jpg";
import Dinho from "./assets/dinho.jpg";
import Arsenal from "./assets/Gunners.jpg";
import Barca from "./assets/sixtuple.jpg";
import Cantona from "./assets/THE KING IS BACK.jpg";
import Maldini from "./assets/UN cONFIZZIONE.jpg";
import Zidane from "./assets/Zizou.jpg";
import Pele from "./assets/PeleBeck01.jpg";
import Cruyff from "./assets/Flying dutchman.jpg";
import { Link } from "react-router-dom";

// Kit details
const kitsNapoli = {
    Name: "Napoli home kit Maradona 85/86",
    Price: "$100"
};

const kitsBarca = {
    Name: "Dinho home kit 05/06",
    Price: "$50"
};

const kitsArsenal = {
    Name: "Arsenal home kit 93/94",
    Price: "$50"
};

const kitsBarca2 = {
    Name: "Barcelona home kit 08/09",
    Price: "$50"
};

const kitsManU = {
    Name: "Cantona home kit 96/97",
    Price: "$50"
};

const kitsmaldini = {
    Name: "Maldini home kit 93/94",
    Price: "$60"
};

const kitsZidane = {
    Name: "Zidane home kit 93/94",
    Price: "$59"
};

const kitsPele = {
    Name: "Pele kit",
    Price: "$100"
};

const kitsCruyff = {
    Name: "Cryuff kit",
    Price: "$100"
};


const Kids = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="kids-container">
            <h1 className="logo">Joga Bonito Retro</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {/* Kits Grid */}
            <div className="kits-row">
                <div className="kit">
                    <img src={Maradona} alt="Maradona Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Maradonakids'}>
                            <p className="kit-name">{kitsNapoli.Name}</p>
                            <p className="kit-price">{kitsNapoli.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Dinho} alt="Dinho Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Dinhokids'}>
                            <p className="kit-name">{kitsBarca.Name}</p>
                            <p className="kit-price">{kitsBarca.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Arsenal} alt="Arsenal Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Arsenalkids'}>
                            <p className="kit-name">{kitsArsenal.Name}</p>
                            <p className="kit-price">{kitsArsenal.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Barca} alt="Barcelona Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Barcelonakids'}>
                            <p className="kit-name">{kitsBarca2.Name}</p>
                            <p className="kit-price">{kitsBarca2.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Cantona} alt="Cantona Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Cantonakids'}>
                            <p className="kit-name">{kitsManU.Name}</p>
                            <p className="kit-price">{kitsManU.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Maldini} alt="Maldini Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Maldinikids'}>
                            <p className="kit-name">{kitsmaldini.Name}</p>
                            <p className="kit-price">{kitsmaldini.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Zidane} alt="Zidane Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Zidanekids'}>
                            <p className="kit-name">{kitsZidane.Name}</p>
                            <p className="kit-price">{kitsZidane.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Pele} alt="Pele Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Pelekids'}>
                            <p className="kit-name">{kitsPele.Name}</p>
                            <p className="kit-price">{kitsPele.Price}</p>
                        </Link>
                    </div>
                </div>

                <div className="kit">
                    <img src={Cruyff} alt="Cruyff Kit" className="kit-image" />
                    <div className="kit-details">
                        <Link to={'/Cruyffkids'}>
                            <p className="kit-name">{kitsCruyff.Name}</p>
                            <p className="kit-price">{kitsCruyff.Price}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kids;