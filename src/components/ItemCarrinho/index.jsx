import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li className="cart-item">
      <span>{item.name}</span>
      <span>R$ {item.price.toFixed(2)}</span>
      <button onClick={() => removeFromCart(item)}>Remover</button>
    </li>
  );
};

export default CartItem;
