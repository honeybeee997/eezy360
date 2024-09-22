"use client";
import React from "react";

import Container from "../layout/Container";
import Text from "../typography/Text";
import Slider from "../ui/Slider";
import Image from "next/image";

const IMAGES = ["founder-1.webp", "founder-2.webp", "founder-3.webp"];

const Founder = () => {
  return (
    <Container>
      <Text el="h2" className="md:text-center">
        Filmmakers Behind{" "}
        <Text el="span" className="outlined-text">
          Your
        </Text>{" "}
        Story
      </Text>
      <Text className="md:text-center text-paragraph  text-lg md:text-xl">
        Our Founder, Patrick has always loved being creative.
      </Text>
      <Text className="md:text-center text-paragraph text-lg md:text-xl">
        With his passion for filmmaking and marketing, he has harnessed these
        skills to build the best people to help others tell their stories.
      </Text>
      <div className="mt-20 max-w-5xl mx-auto">
        <Slider
          gap={50}
          isFocusSlider
          slides={IMAGES.map((item) => {
            return (
              <div key={item} className="w-full h-96">
                <Image
                  className="mx-auto"
                  src={`/assets/founder/${item}`}
                  alt={item}
                  width={400}
                  height={480}
                />
              </div>
            );
          })}
        />
      </div>
    </Container>
  );
};

export default Founder;
