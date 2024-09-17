import React from "react";

const Slide = ({ children, className }) => {
  let classNames = "bg-primary text-black p-4 !border-none text-lg";
  if (className) classNames = classNames + " " + className;

  return <div className={classNames}>{children}</div>;
};

export default Slide;
