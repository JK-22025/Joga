import React from "react";
import Maldinikitkids from './assets/UN cONFIZZIONE.jpg';
import './Maldini.css';
import { useCart } from './Cartcontext';
import { useState } from 'react';
const Maldinikids = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Maldini-${selectedSize}`,
            name: 'Maldini AC Milan home kit 93/94',
            price: 60,
            size: selectedSize,
            image: Maldinikitkids
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Maldinikitkids} alt="Maldini Kit" /></td>
                    <td>
                        <h2>Maldini AC Milan home kit 93/94 </h2>
                        <p><strong>Price:</strong> $60</p>
                        <p className="kit-description">
                            The AC Milan Kit with Maldini.
                        </p>
                        <div className="size-selection">
                            <p><strong>Select Size:</strong></p>
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        margin: '5px',
                                        backgroundColor: selectedSize === size ? 'black' : 'blue',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="buttons">
                            <button
                                className="add-to-cart-button"
                                onClick={handleAddToCart}
                                style={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Add to Cart
                            </button>
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

export default Maldinikids;