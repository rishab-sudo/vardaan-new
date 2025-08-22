import React from "react";
import "./Button.css"

const Button = ({ text, className = "", link }) => {
  return (
    <button
      className={className}
      onClick={() => (window.location.href = link)}
    >
      {text}
    </button>
  );
};

export default Button;
