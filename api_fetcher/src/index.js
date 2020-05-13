import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import APIContainer from "./APIContainer";

var destination = document.querySelector("#root");

ReactDOM.render(
  <div>
    <APIContainer />
  </div>,
  destination
);
