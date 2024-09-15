import React from "react";

const getClasses = (el) => {
  switch (el) {
    case "h1":
      return "text-6xl font-bold mb-4";
    case "h2":
      return "text-3xl font-semibold mb-3";
    case "h3":
      return "text-2xl font-semibold mb-2";
    case "h4":
      return "text-xl font-medium mb-2";
    case "h5":
      return "text-lg font-medium mb-2";
    case "h6":
      return "text-base font-medium mb-1";
    case "p":
    default:
      return "mb-4";
  }
};

const Text = ({ el = "p", children, className }) => {
  const Element = el;

  let classes = getClasses(el);
  if (className) classes += ` ${className}`;

  return <Element className={classes}>{children}</Element>;
};

export default Text;
