import React from "react";
import Romariopic from './assets/3.jpg';
import './Romario.css';
const Romario = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Romariopic} alt="Romario Kit" /></td>
                    <td>
                        <h2>Romario 94/95 Brazil home kit</h2>
                        <p><strong>Price:</strong> $155</p>
                        <p className="kit-description">
                            Romario 94 Brazil home kit where he reached the world cup final against Italy and won it in 1994.
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

export default Romario;