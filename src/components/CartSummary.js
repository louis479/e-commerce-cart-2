import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>Total: ${total.toFixed(2)}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
