import React from "react";
import Barcelonakitkids from './assets/sixtuple.jpg';
import './Sixtuple.css';
const Sixtuplekids = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Barcelonakitkids} alt="Barcalona Kit" /></td>
                    <td>
                        <h2>Barcelona 08/09 home kit</h2>
                        <p><strong>Price:</strong> $50</p>
                        <p className="kit-description">
                            The Barcalona Kit where they won thier first triple title.
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

export default Sixtuplekids;