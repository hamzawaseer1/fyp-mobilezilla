import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Home from "./Home";
import Contact from "./Contact";

let navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h1>MobileZilla</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/" exact className="Nav_link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              className="Nav_link"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/services"
              className="Nav_link"
              activeClassName="active"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="Nav_link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <input className="input" placeholder="Search Phones" type="text" />
        <button id="signin" className="registration">
          Sign-In
        </button>
        <button id="login" className="registration">
          Sign-Up
        </button>
      </div>
      <hr />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default navbar;
