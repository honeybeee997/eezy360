import React from "react";
import Accordion from "../Accordion";
import Text from "@/components/typography/Text";

const FAQS = [
  {
    title: "What makes you different?",
    content: `Everyone can say "we're here to deliver the best service". But there is saying that vs actually being that. Our work speaks for itself.`,
  },
  {
    title: "What does it cost?",
    content: `Anywhere from £250/Month up to £2,500/Month. It all depends on your situation and what we are going to do for you. To get a quote, just book a 15 minute free demo`,
  },
  {
    title: "And if I don't get results?",
    content: (
      <>
        <Text>
          We offer full refunds if you are not satisfied with our service within
          the first 30 days or if we have not delivered on our promise, minus
          any processing fees. Take two examples:
        </Text>
        <Text el="p" className="text-white font-bold">
          1- Results Offer:
        </Text>
        <Text el="p">
          We promise to get 10 customers in 60 days or you do not pay. We
          deliver 8 and refund the difference, minus processing fees
        </Text>
        <Text el="p" className="text-white font-bold">
          2- Convenience Offer
        </Text>
        <Text el="p" className="text-paragraph">
          We manage your social media and work on optimising your content. If
          you are not satisfied within 30 days. We refund you, minus processing
          fees.
        </Text>
      </>
    ),
  },
];

const FAQs = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Accordion items={FAQS} />
    </div>
  );
};

export default FAQs;
