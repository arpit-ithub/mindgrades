import React from 'react';
import './navbar.css';
import { FaFire, FaChevronDown } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Welcome Rahul!</h1>
      </div>
      <div className="navbar-right">
        <div className="streak-button">
          <FaFire className="fire-icon" />
          <span className="streak-count">2</span>
        </div>
        <button className="explore-button">Explore Community</button>
        <button className="dropdown-button">
          Polity <FaChevronDown className="dropdown-icon"/>
        </button>
        <button className="icon-button">
        <MdOutlinePermPhoneMsg  />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
