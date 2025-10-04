import React from "react";
import "./Navbar.css";
import Logo from "../../assets/branding/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-branding">
        <img src={Logo} id="logo" />
        <h1 className="navbar-heading">CoinMan</h1>
      </div>
    </nav>
  );
};

export default Navbar;
