import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/devtoprofile">DevtoProfile</Link>
        </li>
        <li>
          <Link to="/blogpage">BlogPage</Link>
        </li>
        <li>
          <Link to="/mediumprofile">MediumProfile</Link>
        </li>
        <li>
          <Link to="/writeonmedium">Writeonmedium</Link>
        </li>
        <li>
          <Link to="/writeondevto">Writeondevto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
