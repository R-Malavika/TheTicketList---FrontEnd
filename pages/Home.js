import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" 
     style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHw%3D&w=1000&q=80"})` }}
    >
      <div className="headerContainer">
        <h1> THE TICKET LIST </h1>
        <p> Concerts, Events and more</p>
        <Link to="/login">
          <button> Sign Up </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;