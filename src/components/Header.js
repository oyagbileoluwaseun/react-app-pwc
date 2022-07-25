import React from "react";
import "../App.css";
import logo from "./images/Pwc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <img className="img" src={logo} alt="" />
      </div>
      <div>
        <h3>PwC Website</h3>
      </div>
      <div>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/applicationform">Application Form</Link>
          <Link to="/studentsdata">Students Data</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
