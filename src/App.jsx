import React, { useState } from 'react';
import ProductList from './components/listaDeProduto';
import Cart from './components/carrinho';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Produto A', price: 50.0 },
    { id: 2, name: 'Produto B', price: 30.0 },
    { id: 3, name: 'Produto C', price: 20.0 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carrinho de Compras</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;