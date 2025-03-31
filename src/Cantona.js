import React from "react";
import Cantonakit from './assets/THE KING IS BACK.jpg';
import './Cantona.css';
const Cantona = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Cantonakit} alt="Cantona Kit" /></td>
                    <td>
                        <h2>Cantona Macheseter United away kit 96/97 </h2>
                        <p><strong>Price:</strong> $300</p>
                        <p className="kit-description">
                            The Macheseter United Kit where Cantona kicked a fan during a game.
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
}

export default Cantona;