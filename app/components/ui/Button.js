import React from "react";

import classes from "./Button.module.css";

const Button = ({ className, onClick, children }) => {
  let classNames = `${classes.button} rounded-lg px-8 py-4 border border-primary text-primary transition-all hover:text-black hover:bg-primary tracking-wide`;
  if (className) classNames += ` ${classes.button}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children || "Button"}
    </button>
  );
};

export default Button;
