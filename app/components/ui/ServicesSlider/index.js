import React from "react";

import Slider from "../Slider";
import Slide from "../Slider/Slide";

const SERIVCES = [
  "Content Creation",
  "Social Media Optimization",
  "Marketing Support",
  "Lead Generation",
  "Content Marketing",
  "Client Aquisition",
  "Social Media Marketing",
];

const ServicesSlider = () => {
  return (
    <div className="bg-primary">
      <Slider
        slides={SERIVCES.map((item, i) => {
          return (
            <Slide key={i} className="text-nowrap">
              {item}
            </Slide>
          );
        })}
      />
    </div>
  );
};

export default ServicesSlider;
