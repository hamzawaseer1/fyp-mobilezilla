import React from "react";
let navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h1>MobileZilla</h1>
        </div>
        <ul>
          <li>
            {" "}
            <span class="cool-link">Home</span>{" "}
          </li>
          <li>
            {" "}
            <span class="cool-link">About</span>{" "}
          </li>
          <li>
            {" "}
            <span class="cool-link">Services</span>{" "}
          </li>
          <li>
            {" "}
            <span class="cool-link">Contact</span>{" "}
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
      <div className="slider">
        <h1>this is slider</h1>
      </div>
    </>
  );
};

export default navbar;
