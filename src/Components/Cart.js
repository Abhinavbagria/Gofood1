import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Cart</h2>
      <ul style={styles.itemList}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.item}>
            {item.name} - ${item.price.toFixed(2)}
            <button style={styles.removeButton} onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</p>
      <button style={styles.addButton} onClick={() => addItemToCart({ name: 'Pizza', price: 12.99 })}>
        Add Pizza
      </button>
    </div>
  );
};

const styles = {
  cartContainer: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  itemList: {
    listStyleType: 'none',
    padding: '0',
  },
  item: {
    marginBottom: '10px',
  },
  removeButton: {
    marginLeft: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  total: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Cart;
