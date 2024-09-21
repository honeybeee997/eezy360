import React from "react";

import Founder from "./Founder";
import Expertise from "./Expertise";
import HomepageBanner from "./Banner";
import HomepageFAQs from "./HomepageFAQs";
import ServicesSlider from "../ui/ServicesSlider";
import HomepageShowcase from "./HomepageShowcase";

const Homepage = () => {
  return (
    <>
      <HomepageBanner />
      <ServicesSlider />
      <Expertise />
      <Founder />
      <HomepageShowcase />
      <HomepageFAQs />
    </>
  );
};

export default Homepage;
