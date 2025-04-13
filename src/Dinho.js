import React from "react";
import Ronaldinhokit from './assets/dinho.jpg';
import { useCart } from './Cartcontext';
import { useState } from 'react';
import './Dinho.css';
const Dinho = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Dinho-${selectedSize}`,
            name: 'Barcelona Ronaldinho 05/06 home kit',
            price: 300,
            size: selectedSize,
            image: Ronaldinhokit
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
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

export default Dinho;