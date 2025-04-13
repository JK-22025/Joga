import React from "react";
import Zidanekitkids from './assets/Zizou.jpg';
import './Zidane.css';
import { useCart } from './Cartcontext';
import { useState } from 'react';
const Zidanekids = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Zidane-${selectedSize}`,
            name: 'Juventus Zidane 96/97 home kit',
            price: 59,
            size: selectedSize,
            image: Zidanekitkids
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
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

export default Zidanekids;