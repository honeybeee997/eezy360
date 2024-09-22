import React from "react";

import Container from "../layout/Container";
import DisplayList from "../ui/DisplayList";
import Text from "../typography/Text";
import Button from "../ui/Button";

const Expertise = () => {
  return (
    <section className="bg-bgLight">
      <Container
        Component="div"
        className="flex items-center justify-between md:flex-row flex-col gap-[64px] md:gap-10"
      >
        <div className="max-w-2xl">
          <Text el="h2">
            An{" "}
            <Text el="span" className="outlined-text">
              All-in-One
            </Text>{" "}
            Marketing Solution for your Business
          </Text>
          <Text className="text-paragraph text-lg">
            We are a Creative Marketing agency.
          </Text>
          <Text className="text-paragraph text-lg">
            We help you get more more customers using content creation and
            social media marketing.
          </Text>
          <Button className="mt-6">Book a Free Demo</Button>
        </div>
        <div className="w-full max-w-2xl">
          <Text el="h2">Expertise</Text>
          <DisplayList
            items={[
              "Content Creation (Video/Photo Editing & Graphic Design)",
              "Paid Ads (Meta & TikTok)",
              "Conversion Rate Optimisation",
              "Social Media Account Setup & Management",
              "​Marketing Coaching Calls",
              "Social Media & Website Audits",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
