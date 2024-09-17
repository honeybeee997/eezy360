import React from "react";

import Container from "../layout/Container";
import DisplayList from "../ui/DisplayList";
import Text from "../typography/Text";

const Expertise = () => {
  return (
    <section className="bg-bgLight">
      <Container
        Component="div"
        className="flex gap-40 items-center justify-between"
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
            We're a Creative Marketing agency.
          </Text>
          <Text className="text-paragraph text-lg">
            We help you get more more customers using content creation and
            social media marketing.
          </Text>
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
