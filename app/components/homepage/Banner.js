import React from "react";

import Video from "../ui/Video";
import Text from "@/typography/Text";
import Button from "@/components/ui/Button";

import classes from "./Banner.module.css";

const HomepageBanner = () => {
  return (
    <section
      className={`h-screen flex items-end  overflow-hidden relative ${classes.home_banner}`}
    >
      <Video
        src="/assets/file.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-70 scale-[1.2]"
      />
      <div className="p-10 max-w-5xl bg-black backdrop-blur-sm bg-opacity-10 rounded-tr-xl [text-shadow:_0_2px_0_rgb(0_0_0/_0.5)]">
        <Text el="h1" className="text-8xl [text-shadow:none]">
          The{" "}
          <Text el="span" className="text-8xl outlined-text">
            creative
          </Text>{" "}
          spark behind your ads
        </Text>
        <Text el="p" className="text-2xl">
          Get more customers using content creation and social media marketing
        </Text>
        <Button>Book a Free Demo</Button>
      </div>
    </section>
  );
};

export default HomepageBanner;
