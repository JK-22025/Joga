import React from "react";
import Maradonakit from './assets/Drugs.jpg';

const Maradona = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    { <td><img src={Maradonakit} alt="Napoli Kit" /></td>}
                    <td>
                        <h2>Napoli Maradona 85/86 home kit</h2>
                        <p><strong>Price:</strong> $250</p>
                        <p className="kit-description">
                            Maradona second season with Napoli when he won the world cup in 86 in Mexico.
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

export default Maradona;


