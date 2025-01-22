import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
