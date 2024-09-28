import React from "react";
import Container from "../layout/Container";
import FAQs from "../ui/FAQs";
import Text from "../typography/Text";
import Button from "../ui/Button";

const HomepageFAQs = () => {
  return (
    <Container className="homapge__faqs_section">
      <div className="flex justify-between items-center mb-20 gap-10 flex-wrap md:flex-nowrap">
        <div className="homage__faqs_fade_in opacity-0">
          <Text el="h2">Frequently Asked Questions</Text>
          <Text className="text-paragraph max-w-2xl">
            We have compiled answers to the most common questions about our
            products, shipping, and services to assist you. Find answers to
            common queries about orders, shipping, returns, and more, all in one
            place.
          </Text>
        </div>
        <Button iconButton className="homage__faqs_fade_in opacity-0">
          Still Have a Question?
        </Button>
      </div>
      <div className="homage__faqs_fade_in opacity-0">
        <FAQs />
      </div>
      <div className="mt-20 text-center homage__faqs_fade_in opacity-0">
        <Button>Book a Free Demo</Button>
      </div>
    </Container>
  );
};

export default HomepageFAQs;
