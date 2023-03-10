import React from 'react';

import './Candy.css';
function Cart(props) {
  const { items, onUpdateQuantity, onRemoveItem } = props;

  const handleQuantityChange = (item, newQuantity) => {
    onUpdateQuantity(item, newQuantity);
  };

  const handleRemoveItem = (item) => {
    onRemoveItem(item);
  };

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </div>
                <div className="item-controls">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item, parseInt(e.target.value))
                    }
                  />
                  <button onClick={() => handleRemoveItem(item)}>
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Cart;
