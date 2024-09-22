import React from "react";

import Video from "../ui/Video";
import Text from "@/typography/Text";
import Button from "@/components/ui/Button";

import classes from "./Banner.module.css";

const HomepageBanner = () => {
  return (
    <section
      className={`h-screen flex items-center justify-center  overflow-hidden relative ${classes.home_banner}`}
    >
      <Video
        src="/assets/file.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-50 scale-[1.2]"
      />
      {/* Height of the header(84px) + top offset(20px) = 104px margin-top  mt-[104px] */}
      <div className="p-3 md:p-10 max-w-5xl rounded-xl text-center [text-shadow:_0_1px_0_rgb(0_0_0/_0.5)]">
        <Text el="h1" className="!text-5xl md:!text-8xl [text-shadow:none]">
          The{" "}
          <Text el="span" className="!text-5xl md:!text-8xl outlined-text">
            Creative
          </Text>{" "}
          Spark Behind Your Ads
        </Text>
        <Text el="p" className="text-lg md:text-2xl">
          Get more customers using content creation and social media marketing
        </Text>
        <Button>Book a Free Demo</Button>
      </div>
    </section>
  );
};

export default HomepageBanner;
