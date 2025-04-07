import React from "react";
import { useCart } from "./Cart";
import './Cartpage.css';

const Cartpage = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const handleCheckout = () => {
        alert("Thank you for your purchase and remember to play beatiful!");
        removeFromCart();
    };
    
    return (
        <div className="container">
          <h2>Your Shopping Cart</h2>
    
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p><strong>{item.name}</strong></p>
                    <p>Size: {item.size}</p>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
    
              <hr />
              <h3>Total: ${totalPrice}</h3>
              <button onClick={removeFromCart}>Clear Cart</button>
              <button onClick={handleCheckout}>Checkout</button>
            </>
          )}
        </div>
      );


};

export default Cartpage;
