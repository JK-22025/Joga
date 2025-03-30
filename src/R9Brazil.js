import React from "react";
import RonaldoBrazil from './assets/2.jpg';
import './R9Brazil.css';

const R9Brazil = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={RonaldoBrazil} alt="Ronaldo Nazario Brazil Kit" /></td>
                    <td>
                        <h2>Ronaldo Nazario 96/97 Barcelona away kit</h2>
                        <p><strong>Price:</strong> $150</p>
                        <p className="kit-description">
                            Ronaldo Nazario 97/98 Barzil home kit where he reached the world cup final with Brazil.
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

export default R9Brazil;