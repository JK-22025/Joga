import React from "react";
import {Link} from "react-router-dom";
import './Kits.css';
import Maradona from './assets/Drugs.jpg';
import Dinho from './assets/dinho.jpg';
import Cryuff from './assets/Flying dutchman.jpg';
import Arsenal from './assets/Gunners.jpg';
import Pele from './assets/PeleBeck01.jpg';
import Cantona from './assets/THE KING IS BACK.jpg';
import milan from './assets/UN cONFIZZIONE.jpg';


const Kits = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

}