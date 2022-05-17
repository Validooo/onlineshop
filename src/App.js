import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Products/Topbar/Topbar';
import Products from './Components/Products/Products';
import { commerce } from './commerce';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import React, { Component } from 'react'

const App = () => {


  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },
  )

  //console.log(cart);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item)
  }


  // console.log(cart.total_items + "in app")


  //  console.log(this.state.pprod.price.formatted)
  return (
    <BrowserRouter>

      <div >

        <Topbar cart={cart} />
        <Routes>
          <Route path="/" element={<Products products={products} handleAddToCart={handleAddToCart} />} />

        </Routes>



      </div>

    </BrowserRouter>
  )

}

export default App;
