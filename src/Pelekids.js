import React from "react";
import Pelekitkids from './assets/PeleBeck01.jpg';
import { useCart } from './Cartcontext';
import { useState } from 'react';
import './Pele.css';

const Pelekids = () => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Pele-${selectedSize}`,
            name: 'Pele Brazil 1970 home kit',
            price: 100,
            size: selectedSize,
            image: Pelekitkids
        };
    
        addToCart(item);
        alert('Item added to cart');
    }
    return (
        <div className="kit">
            <table>
                <tbody>
                <tr>
                    <td><img src={Pelekitkids} alt="Pele Kit" /></td>
                    <td>
                        <h2>Pele Brazil 1970 home kit</h2>
                        <p><strong>Price:</strong> $100</p>
                        <p className="kit-description">
                            Pele in 1970 won his third and lastworld cup for Brazil.
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

export default Pelekids;