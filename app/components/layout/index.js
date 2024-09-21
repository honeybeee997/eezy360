import React from "react";

import Logo from "../brand/Logo";
import Nav from "@/components/layout/Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8 absolute top-5 left-0 right-0 z-10 w-full">
        <Logo />
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
