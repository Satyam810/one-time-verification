import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <Link to="/" className="navlink">
        Home
      </Link>
      <span> </span>
      <Link to="/about" className="navlink">
        About
      </Link>
      <span> </span>
      <Link to="/verify" className="navlink">
        Verification
      </Link>
      <span> </span>
      {/* <div className="searchbox">
        <input type="text" name="search" placeholder="Search." />
        <button>Search</button>
      </div> */}
    </div>
  );
};

export default Navbar;
