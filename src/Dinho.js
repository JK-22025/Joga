import React from "react";
import Ronaldinhokit from './assets/dinho.jpg';
import './Dinho.css';
const dinho = () => {
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Ronaldinhokit} alt="Ronaldinho Kit" /></td>
                    <td>
                        <h2>Barcelona Ronaldinho 05/06 home kit</h2>
                        <p><strong>Price:</strong> $300</p>
                        <p className="kit-description">
                            Ronaldinho with Barcelona where he won the UCL in 2006.
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

export default dinho;