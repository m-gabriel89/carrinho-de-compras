import React from 'react';
import CartItem from '../ItemCarrinho';
import "../style.modules.css"

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <div className="total">Total: R$ {total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
