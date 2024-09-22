"use client";

import React from "react";
import NavItem from "./NavItem";

import classes from "./NavItem.module.css";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Careers",
    path: "/careers",
  },
];

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleNavToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`bg-primary p-2 rounded-full ${classes.nav__trigger} ${
          isOpen && classes.nav__trigger__open
        }`}
        onClick={handleNavToggle}
        role="button"
      >
        <span className="h-[2px] w-5 bg-black block"></span>
        <span className="h-[2px] w-5 bg-black my-1 block"></span>
        <span className="h-[2px] w-5 bg-black block"></span>
      </div>
      <nav
        className={`bg-blur p-2 backdrop-blur-2xl rounded-lg ${
          classes.nav__wrapper
        } ${isOpen && classes.nav__open}`}
      >
        <ul
          className={`flex items-stretch gap-[6px] text-white ${classes.nav}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.name} url={item.path}>
              {item.name}
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Index;
