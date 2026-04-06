import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>

      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

<Footer/>
    </Router>
  );
};

export default App;
