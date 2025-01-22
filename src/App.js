import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import './styles/base.css';
import './styles/layout.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "T-Shirt", price: 20, image: "/images/tshirt.jpg" },
    { id: 2, name: "Jeans", price: 40, image: "/images/jeans.jpg" },
    { id: 3, name: "Sneakers", price: 60, image: "/images/sneakers.jpg" },
    { id: 4, name: "Hat", price: 15, image: "/images/hat.jpg" },
    { id: 5, name: "Socks", price: 5, image: "/images/socks.jpg" },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
