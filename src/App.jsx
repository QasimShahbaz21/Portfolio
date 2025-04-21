import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Home from "./components/Home"; // You’ll create this

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
