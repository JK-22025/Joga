import React, { useState } from "react";
import { useCart } from './Cartcontext';
import RonaldoNaz from './assets/1.jpg';
import './R9Barca.css';

const R9Barca = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const item = {
      id: `R9Barca-${selectedSize}`,
      name: 'Ronaldo Nazario 96/97 Barcelona away kit',
      price: 150,
      size: selectedSize,
      image: RonaldoNaz
    };

    addToCart(item);
    alert('Item added to cart');
  };

  return (
    <div className="kit">
      <table>
        <tbody>
          <tr>
            <td><img src={RonaldoNaz} alt="Ronaldo Nazario Kit" /></td>
            <td>
              <h2>Ronaldo Nazario 96/97 Barcelona away kit</h2>
              <p><strong>Price:</strong> $150</p>
              <p className="kit-description">
                Ronaldo Nazario 96/97 Barcelona away kit where he had an amazing season with Barcelona where he scored 47 goals in 51 games.
              </p>

              <div className="size-selection">
                <p><strong>Select Size:</strong></p>
                {['S', 'M', 'L', 'XL'].map(size => (
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
};

export default R9Barca;