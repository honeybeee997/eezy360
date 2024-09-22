"use client";
import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Default theme
import "@splidejs/react-splide/css";

const Slider = ({
  slides = [],
  gap = -1,
  leftToRight = false,
  isFocusSlider = false,
}) => {
  let perPage = 4;

  const options = {
    type: "loop",
    pagination: false,
    arrows: false,
    gap,
    perPage: isFocusSlider ? 3 : perPage,
    breakpoints: {
      980: { perPage: 3 },
      750: { perPage: 2 },
      450: { perPage: 1 },
    },
  };

  if (isFocusSlider) {
    options.snap = true;
    options.autoplay = true;
    options.interval = 3000;
  } else {
    options.drag = "free";
    options.autoScroll = { speed: leftToRight ? -2 : 2 };
  }

  return (
    <Splide
      aria-label="My Favorite Images"
      options={options}
      extensions={isFocusSlider ? {} : { AutoScroll }}
    >
      {slides.map((item, i) => {
        return <SplideSlide key={i}>{item}</SplideSlide>;
      })}
    </Splide>
  );
};

export default Slider;
