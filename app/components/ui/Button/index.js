import React from "react";

import { FaArrowRight } from "react-icons/fa6";

import classes from "./Button.module.css";
import Text from "@/components/typography/Text";

const Button = ({ className, onClick, children, iconButton }) => {
  let classNames = iconButton ? classes.button_rounded : classes.button;
  if (className) classNames += ` ${className}`;

  if (iconButton) {
    classNames += " text-paragraph flex items-center gap-4 transition-all";
    return (
      <button className={classNames} onClick={onClick}>
        <Text el="strong" className="!mb-0">
          {children || "Button"}
        </Text>
        <div className="p-4 border border-primary rounded-full text-2xl text-primary transition-all">
          <FaArrowRight className="transition-all" />
        </div>
      </button>
    );
  }

  classNames +=
    "  rounded-lg px-8 py-4 border border-primary text-primary transition-all hover:text-black hover:bg-primary tracking-wide";

  return (
    <button className={classNames} onClick={onClick}>
      {children || "Button"}
    </button>
  );
};

export default Button;
