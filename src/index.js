import React from "react";
import ReactDOM from "react-dom";

const fName = "Raul";
const lName = "Rivera";
const luckyNum = 777;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
