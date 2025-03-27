import React from "react";
import RonaldoNaz from './assets/1.jpg';
import './R9_Barça.css';

const R9_Barcelona = () => {    
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={RonaldoNaz} alt="Ronaldo Nazario Kit" /></td>
                    <td>
                        <h2>Ronaldo Nazario 96/97 Barcelona away kit</h2>
                        <p><strong>Price:</strong> $150</p>
                        <p className="kit-description">
                            Ronaldo Nazario 96/97 Barcelona away kit where he had an amazing season with Barcelona where he scored 47 goals in 51 games.
                        </p>
                        <div className="size-selection">
                            <p><strong>Select Size:</strong></p>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                        </div>
                        <div className="buttons">
                            <button className="add-to-cart-button">Add to Cart</button>
                            <button className="apple-pay">Apple Pay</button>
                            <button className="google-pay">Google Pay</button>
                        </div>
                    </td>
                </tr>

                </tbody>
                
            </table>
        </div>
    );
};

export default R9_Barcelona;