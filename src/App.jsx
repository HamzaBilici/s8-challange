import { useState } from "react";
import "./App.css";
import MainBanner from "./components/MainBanner.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MainBanner />
      <Content />
      <Footer />
    </>
  );
}

export default App;
