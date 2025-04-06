import React from "react";
import Arsenalkitkids from './assets/Gunners.jpg';
import './Arsenal.css';

const Arsenalkids = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    { <td><img src={Arsenalkitkids} alt="Arsenal Kit" /></td>}
                    <td>
                        <h2>Arsenal 93/94 home kit</h2>
                        <p><strong>Price:</strong> $50</p>
                        <p className="kit-description">
                            Arsenal 93/94 home kit Lee Dixion
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

export default Arsenalkids;


