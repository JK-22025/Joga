import React from "react";
import { useCart } from './Cartcontext';
import Romariopic from './assets/3.jpg';
import './Romario.css';
import { useState } from 'react';
const Romario = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Romario-${selectedSize}`,
            name: 'Romario 94/95 Brazil home kit',
            price: 155,
            size: selectedSize,
            image: Romariopic
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
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
                    
                            <div className="buttons">
                        <button
                        className="add-to-cart-button"
                        onClick={handleAddToCart}
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px 20px',
                            marginTop: '10px',
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

export default Romario;