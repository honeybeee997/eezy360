import React from "react";

import Slider from "../Slider";
import Slide from "../Slider/Slide";

const ServicesSlider = () => {
  return (
    <Slider
      slides={[
        <Slide>Content Creation</Slide>,
        <Slide>Social Media Optimization</Slide>,
        <Slide>Marketing Support</Slide>,
        <Slide>Lead Generation</Slide>,
        <Slide>Content Marketing</Slide>,
        <Slide>Client Aquisition</Slide>,
        <Slide>Social Media Marketing</Slide>,
      ]}
    />
  );
};

export default ServicesSlider;
