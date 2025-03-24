import React from "react";
import RonaldoNaz from './assets/1.jpg';
import './R9_Barça.css';

const R9_Barcelona = () => {    
    return (
        <div className="page-container">
            <img src={RonaldoNaz} alt="RonaldoNaz" />
            <div className="kit-details">
                <h2>Ronaldo Nazario 96/97 Barcelona away kit </h2>
                <p>Price: $150</p>
                <div className="size-selection">
                    <p>Select Size:</p>
                    <div className="size-selection">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                <div className="quantity-selection">
                    <p>Quantity:</p>
                    <input type="number" min="1" max="20" defaultValue="1" />
                </div>
                <p className="kit-description">
                    Ronaldo Nazario 96/97 Barcelona away kit where he had an amazing season with Barcelona where he scored 47 goals in 51 games.
                </p>
                <div className="buttons">
                    <button className="add-to-cart-button">Add to Cart</button>
                    <button className="apple-pay">Apple Pay</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default R9_Barcelona;