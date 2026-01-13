import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Order from "./Order.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order">
          <Route index element={<Order />} />
          <Route path="success" element={<OrderSuccess />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

function OrderSuccess() {
  return (
    <>
      <h1>Order Successful!</h1>
    </>
  );
}
