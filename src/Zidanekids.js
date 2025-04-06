import React from "react";
import Zidanekitkids from './assets/Zizou.jpg';
import './Zidane.css';
const Zidanekids = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Zidanekitkids} alt="Zidane Kit" /></td>
                    <td>
                        <h2>Juventus Zidane 96/97 home kit</h2>
                        <p><strong>Price:</strong> $59</p>
                        <p className="kit-description">
                            Zidane with Juventus where he won the Ballon d'Or in 97.
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

export default Zidanekids;