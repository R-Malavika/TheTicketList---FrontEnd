import React, { useState } from "react";
// import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/"> <p>THE TICKET LIST</p></Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/events"> Events </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Sign Up </Link>
          <Link to="/get">Get Details</Link>
          <Link to="/update">Update Details</Link>
          <Link to="/delete">Cancel</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/events"> Events </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Sign Up </Link>
        <Link to="/get">Get Details</Link>
        <Link to="/update">Update Details</Link>
        <Link to="/delete">Cancel</Link>
        <button onClick={toggleNavbar}>
          
        </button>
      </div>
    </div>
  );
}

export default Navbar;