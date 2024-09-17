"use client";
import React, { useId } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Default theme
import "@splidejs/react-splide/css";

const Slider = ({ slides = [] }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        drag: "free",
        perPage: 4,
        pagination: false,
        arrows: false,
        gap: -1,
        autoScroll: { speed: 2 },
      }}
      extensions={{ AutoScroll }}
    >
      {slides.map((item) => {
        const id = useId();

        return <SplideSlide key={id}>{item}</SplideSlide>;
      })}
    </Splide>
  );
};

export default Slider;
