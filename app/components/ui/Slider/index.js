"use client";
import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Default theme
import "@splidejs/react-splide/css";

const Slider = ({ slides = [], gap = -1, leftToRight = false }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        drag: "free",
        perPage: 4,
        pagination: false,
        arrows: false,
        gap,
        autoScroll: { speed: leftToRight ? -2 : 2 },
      }}
      extensions={{ AutoScroll }}
    >
      {slides.map((item, i) => {
        return <SplideSlide key={i}>{item}</SplideSlide>;
      })}
    </Splide>
  );
};

export default Slider;
