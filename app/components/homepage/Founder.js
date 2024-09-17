import React from "react";

import Container from "../layout/Container";
import Text from "../typography/Text";
import ZoomImage from "../ui/ZoomImage";

const Founder = () => {
  return (
    <Container>
      <Text el="h2" className="text-center">
        Filmmakers Behind{" "}
        <Text el="span" className="outlined-text">
          Your
        </Text>{" "}
        Story
      </Text>
      <Text className="text-center text-paragraph text-xl">
        Our Founder, Patrick has always loved being creative.
      </Text>
      <Text className="text-center text-paragraph text-xl">
        With his passion for filmmaking and marketing, he's harnessed these
        skills to build the best people to help others tell their stories.
      </Text>
      <div className="flex justify-center mt-20 gap-20">
        <ZoomImage src="/assets/founder/founder-1.webp" />
        <ZoomImage src="/assets/founder/founder-2.webp" />
        <ZoomImage src="/assets/founder/founder-3.webp" />
      </div>
    </Container>
  );
};

export default Founder;
