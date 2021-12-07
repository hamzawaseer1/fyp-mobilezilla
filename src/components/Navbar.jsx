import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Home from "./Home";
import Contact from "./Contact";

let navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h1>HamzaWaseer</h1>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              exact="true"
              className="Nav_link"
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/about"
              className="Nav_link"
              activeclassname="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/services"
              className="Nav_link"
              activeclassname="active"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="Nav_link"
              activeclassname="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/about" element={<About />} />
        <Route exact="true" path="/services" element={<Services />} />
        <Route exact="true" path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default navbar;
