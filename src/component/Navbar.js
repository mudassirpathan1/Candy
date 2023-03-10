import React, { useState } from 'react';
import Cart from './Cart';
import './Navbar.css';

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (candy) => {
    const existingItem = cartItems.find((item) => item.name === candy.name);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === candy.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...candy, quantity: 1 }]);
    }
  };

  return (
    <nav className="navbar">
      <h1>Candy Shop</h1>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/candies">Candies</a>
        </li>
        <li>
          <button onClick={() => handleAddToCart({ name: 'Candy', price: 1 })}>
            Add to Cart
          </button>
          <Cart items={cartItems} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
