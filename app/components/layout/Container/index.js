import React from "react";

const Container = ({ children, Component = "section", className }) => {
  let classNames = "max-w-[1800px] mx-auto w-[95%] py-[64px] md:py-[120px]";
  if (className) classNames = classNames + " " + className;

  return <Component className={classNames}>{children}</Component>;
};

export default Container;
