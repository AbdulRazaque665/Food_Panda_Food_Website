import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Burger", price: 250 },
    { id: 2, name: "Pizza", price: 500 },
    { id: 3, name: "Fries", price: 100 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <Link to={`/delivery/${product.id}`}>Order Now</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
