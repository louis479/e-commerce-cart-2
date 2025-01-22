import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>
          <CartSummary cart={cart} />
        </>
      )}
    </div>
  );
};

export default Cart;
