import React from "react";

import Image from "next/image";

import Text from "@/typography/Text";
import Button from "@/components/ui/Button";

const HomepageBanner = () => {
  return (
    <section className="h-screen flex items-end home-banner overflow-hidden relative">
      <Image
        src="/assets/home-banner-bg.webp"
        alt="eezy360 banner-bg"
        className="opacity-15 absolute z-[-1] top-[-10%] right-[-33%]"
        width={1920}
        height={1080}
      />
      <div className="p-10">
        <Text el="h1" className="max-w-5xl text-8xl">
          The{" "}
          <Text el="span" className="text-8xl outlined-text">
            creative
          </Text>{" "}
          spark behind your ads.
        </Text>
        <Button>Book a Free Demo</Button>
      </div>
    </section>
  );
};

export default HomepageBanner;
