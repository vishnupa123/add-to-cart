import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";

import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>

      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
         <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

<Footer/>
    </Router>
  );
};

export default App;
