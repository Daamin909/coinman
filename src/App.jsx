import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Coin from "./components/Coin/Coin";
import "./App.css";
const App = () => {
  const [options, setOptions] = useState([
    "USD",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
    "INR",
  ]);
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <List options={options} />
        <Coin />
      </div>
    </div>
  );
};

export default App;
