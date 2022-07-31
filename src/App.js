import logo from './logo.svg';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { commerce } from './commerce';
import Products from './Components/Products/Products';
import Checkout from './Components/CheckoutForm/Checkout/Checkout';
import ProductsSearch from './Components/SearchedProducts/ProductsSearch';
import Singleproduct from './Components/Singleproduct/Singleproduct';
import Cart from './Components/Cart/Cart';


function App() {
  const [search, setSearch] = useState("");
  const [itemsnumber, Setitemsnumber] = useState(1)

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchedProduct, SetSearchedProduct] = useState([]);
  const [showSingleProduct, setSinlgeProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart])
  /*
    if (cart != undefined) {
      console.log(cart)
    }
  */

  useEffect(() => {
    getTheResultsofTheSearch();
    console.log(search)
    console.log(searchedProduct)
  }, [search])



  const getTheResultsofTheSearch = () => {
    const result = []
    if (search == '') {
      SetSearchedProduct([]);
    }
    else {
      products.forEach(product => {
        if (product.name.toLowerCase().startsWith(search.toLowerCase())) {
          result.push(product)
          //    console.log(product.name)
        }
      })
      SetSearchedProduct(result)
    }
  }

  // console.log(products)

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

  const changeSearch = (word) => {
    setSearch(word)
  }


  const getTheWantedProduct = (product) => {
    setSinlgeProduct(product)
  }



  return (
    <BrowserRouter>
      <div className="App">


        <Topbar totalItems={cart.total_items} changeSearch={changeSearch} />
        <Routes>
          <Route path="/" element={<Products products={products} handleAddToCart={handleAddToCart} searchedProduct={searchedProduct} search={search} getTheWantedProduct={getTheWantedProduct} />} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path='/search' element={<ProductsSearch products={products} handleAddToCart={handleAddToCart} searchedProduct={searchedProduct} search={search} />} />
          <Route path='/product' element={<Singleproduct products={products} handleAddToCart={handleAddToCart} searchedProduct={searchedProduct} search={search} showSingleProduct={showSingleProduct} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
