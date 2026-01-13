import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Router, Route } from "react-router";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
