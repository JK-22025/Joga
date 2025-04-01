import React from "react";
import Cruyffkit from './assets/Flying dutchman.jpg';
import './Cruyff.css';

const Cruyff = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Cruyffkit} alt="Cruyff Kit" /></td>
                    <td>
                        <h2>Cruyff Netherlands 1974 home kit</h2>
                        <p><strong>Price:</strong> $2000</p>
                        <p className="kit-description">
                            Cruyff reached the world cup final in 1974 and lost it to West Germany.
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

export default Cruyff;