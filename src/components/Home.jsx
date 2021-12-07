import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

let Home = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="description">
          <p className="desc">MERN Stack Developer</p>
          <h1>
            I'm Ali <br /> Hamza
          </h1>
          <div className="butttn">
            <NavLink to="/about">
              <button className="btnhome">More About me </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="btnhome, btnhome2">Hire Me</button>
            </NavLink>
          </div>
        </div>
        <div className="tasbeh">
          <img src="images/hamzapsd.png" />
        </div>
      </div>
    </>
  );
};

export default Home;
