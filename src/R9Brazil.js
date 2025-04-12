import React from "react";
import { useCart } from './Cartcontext';
import RonaldoBrazil from './assets/2.jpg';
import './R9Brazil.css';

const R9Brazil = () => {
    const { addToCart } = useCart();
    const[selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
    
        const item = {
            id: `R9Brazil-${selectedSize}`,
            name: 'Ronaldo Brazil 98/99 Brazil home kit',
            price: 155,
            size: selectedSize,
            image: RonaldoBrazil
        };
    
        addToCart(item);
        alert('Item added to cart');
    };
    return (
      <div className="kit">
        <table>
            <tbody>
            <tr>
                <td><img src={RonaldoBrazil} alt="Ronaldo Brazil Kit" /></td>
                <td>
                    <h2>Ronaldo Brazil 98/99 Brazil home kit</h2>
                    <p><strong>Price:</strong> $155</p>
                    <p className="kit-description">
                        Ronaldo Brazil 98/99 Brazil home kit where he reached the world cup final..
                    </p>
                    <div className="size-selection">
                        <p><strong>Select Size:</strong></p>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <button>
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
                            </button>
                            >
                            {size}
                        ))}
                    </div>
                    <div className="size-selection">
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
  };
  

export default R9Brazil;