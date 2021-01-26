import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  // we shoud pass the values as a "string" li javaScript code not like in CSS file
  color: "red",
  fontSize: "20px",
  border: "1px solid yellow",
  backgroundImage: " linear-gradient(purple, lightgreen)"
};

customStyle.color = "cyan";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
