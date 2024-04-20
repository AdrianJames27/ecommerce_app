import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import ProductPages from './components/ProductPages';
import Navigation from "./components/Navigation";

function App() {
  const [carts, setCarts] = useState([]);

  function removeFromCart(product)  {
    const newCartList = carts.filter(item => item.name !== product.name);
    setCarts(newCartList);
  };

  function clearCart() {
    setCarts([]);
  }

  return(
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/my-cart' 
                  element={
                    <ViewCart 
                      carts={carts} 
                      onRemoveFromCart={removeFromCart} 
                      onClearCart={clearCart} />
                  } />
          <Route path='/product-pages' element={<ProductPages setCarts={setCarts}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
