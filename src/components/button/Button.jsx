import React from "react";
import * as s from "./StyleButton.module.scss";

const Button = ({ text, varient }) => {
  return (
    <button
      className={
        varient === "normal"
          ? `${s.btn} ${s.normal}`
          : varient === "outline"
          ? ` ${s.btn} ${s.outline}`
          : ""
      }
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
