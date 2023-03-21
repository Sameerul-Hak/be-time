import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [mobile, setmobile] = useState(false);
  const [click, setclick] = useState(false);
  return (
    <div className="nav_container">
      <div className={click ? "navbar-mobile" : "navbar"}>
        <ul className={click ? "nav-items-mobile" : "nav-items"}>
          <button
            className="close-button"
            onClick={() => {
              setclick(!click);
            }}
          >
            {"X"}
          </button>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger">
          <button
            id="nav-buttons"
            onClick={() => {
              setclick(!click);
            }}
          >
            <span></span>
          </button>
          <button
            id="nav-buttons"
            onClick={() => {
              setclick(!click);
            }}
          >
            <span></span>
          </button>
          <button
            id="nav-buttons"
            onClick={() => {
              setclick(!click);
            }}
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
