import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img className="img" src={props.imgsrc} />
        <span className="title">{props.title}</span>
        <span className="desc">{props.desc}</span>
        <div className="button">
          <a href="https://www.netflix.com/pk/" target="_blank">
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
