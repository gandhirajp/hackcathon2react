import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Prouct from "./components/Prouct/Prouct";
import Service from "./components/Service/Service";
import Cart from "./components/Cart/Cart";



const App = () => {

  return (

    <BrowserRouter>
      <Navbar />
     
      <div className='container-fluid'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Prouct />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    <div/> 
      </BrowserRouter >
   

  );
}

export default App;
