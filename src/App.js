import { useState, useEffect } from 'react';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Products from './Components/Products/Products';
import { commerce } from './commerce';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/CheckoutForm/Checkout/Checkout'


import React, { Component } from 'react'

const App = () => {


  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart])
  /*
    if (cart != undefined) {
      console.log(cart)
    }
  */
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log("the item is" + item)
    setCart(item)
    console.log("total is " + cart.total_items)

  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };


  // console.log(cart.total_items + "in app")



  return (
    <BrowserRouter>

      <div >

        <Topbar totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={<Products products={products} handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>

    </BrowserRouter>
  )

}

export default App;