import React from "react";
import Maldinikit from './assets/UN cONFIZZIONE.jpg';
import './Maldini.css';
const Maldini = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Maldinikit} alt="Maldini Kit" /></td>
                    <td>
                        <h2>Maldini AC Milan home kit 93/94 </h2>
                        <p><strong>Price:</strong> $500</p>
                        <p className="kit-description">
                            The AC Milan Kit with Maldini.
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

export default Maldini;