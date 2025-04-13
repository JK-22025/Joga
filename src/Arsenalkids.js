import React from "react";
import Arsenalkitkids from './assets/Gunners.jpg';
import './Arsenal.css';
import { useCart } from './Cartcontext';
import { useState } from 'react';

const Arsenalkids = () => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Arsenal-${selectedSize}`,
            name: 'Arsenal 93/94 home kit',
            price: 50,
            size: selectedSize,
            image: Arsenalkitkids
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
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

export default Arsenalkids;


