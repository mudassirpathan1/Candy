import React, { useState } from 'react';
import './Candy.css';

function Candy(props) {
  const { name, description, price } = props;
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
      <p>Items in cart: {cartCount}</p>
    </div>
  );
}

export default Candy;
