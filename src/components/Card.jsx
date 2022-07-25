//Name: FirstName and LastName
//State of Origin
//Stack
//Description< 40 characters

//Design the Card using CSS
//NOTE: Remenber to import css file to your component Card.js

import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h2 className="header">{props.name}</h2>
      <h3>{props.state}</h3>
      <h3>{props.stack}</h3>
      <p>{props.description}</p>
      <p>{props.jobTitle}</p>
    </div>
  );
}

export default Card;
