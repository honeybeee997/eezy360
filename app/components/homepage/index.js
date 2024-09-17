import React from "react";

import Logo from "../brand/Logo";
import Nav from "@/components/ui/Nav";
import HomepageBanner from "./Banner";
import ServicesSlider from "../ui/ServicesSlider";
import Expertise from "./Expertise";

const Homepage = () => {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8 absolute top-5 left-0 right-0 z-10 w-full">
        <Logo />
        <Nav />
      </header>
      <HomepageBanner />
      <ServicesSlider />
      <Expertise />
    </>
  );
};

export default Homepage;
