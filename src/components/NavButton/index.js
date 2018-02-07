import React from "react";
import { Link } from "react-router-dom";

const button = {
  padding: 10,
  color: "black",
  borderRadius: 2,
  borderColor: "skyblue",
  borderWidth: 2,
  borderStyle: "solid",
  color: "#333",
};

const Button = props => {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <span style={button}>{props.name}</span>
    </Link>
  );
};

export default Button;
