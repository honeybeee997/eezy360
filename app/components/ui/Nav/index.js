import React from "react";
import NavItem from "./NavItem";

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
  return (
    <nav className="bg-blur p-2 backdrop-blur-2xl rounded-lg">
      <ul className="flex items-stretch gap-[6px] text-white">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} url={item.path}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Index;
