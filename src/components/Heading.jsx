import React from "react";
import sdata from "./sdata";

function Heading() {
  return (
    <>
      <nav className="navbar">
        <h1>TOP {sdata.length} NETFLIX SERIES</h1>
      </nav>
    </>
  );
}
export default Heading;
