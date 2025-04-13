import React from "react";
import Cruyffkit from './assets/Flying dutchman.jpg';
import './Cruyff.css';
import { useCart } from './Cartcontext';
import { useState } from 'react';

const Cruyff = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `Cruyff-${selectedSize}`,
            name: 'Cruyff Netherlands 1974 home kit',
            price: 2000,
            size: selectedSize,
            image: Cruyffkit
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
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

export default Cruyff;