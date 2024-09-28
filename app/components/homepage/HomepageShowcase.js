import Image from "next/image";

import React from "react";

import Slider from "../ui/Slider";
import Button from "../ui/Button";
import Text from "../typography/Text";
import Container from "../layout/Container";

const SHOWCASE_IMAGES = [
  "showcase-1.webp",
  "showcase-2.webp",
  "showcase-3.webp",
  "showcase-4.webp",
  "showcase-5.webp",
  "showcase-6.webp",
  "showcase-7.webp",
  "showcase-8.webp",
  "showcase-9.webp",
];

const HomepageShowcase = () => {
  return (
    <section className="bg-bgLight py-[64px] md:py-[120px] home__showcase_section">
      <Container
        Component="div"
        className="!p-0 mb-10 md:mb-20 flex justify-between items-center gap-10 flex-wrap md:flex-nowrap"
      >
        <div>
          <div className="overflow-hidden">
            <Text
              el="h2"
              className="home__showcase_slide_up !mb-0 translate-y-32"
            >
              Some Stills of{" "}
              <Text el="span" className="outlined-text">
                Our Work
              </Text>
            </Text>
          </div>
          <Text className="text-lg text-paragraph max-w-2xl mt-10 opacity-0 home__showcase_fade_in">
            These stills showcase our innovative marketing campaigns, from
            branding to digital content, all designed to captivate and engage
            audiences. See how we turn ideas into impactful visual stories.
          </Text>
        </div>
        <div className="hidden md:block opacity-0 home__showcase_fade_in">
          <Button className="text-nowrap">Explore Full Showcase</Button>
        </div>
      </Container>
      <div className="overflow-hidden">
        <div className="translate-y-64 home__showcase_slide_up">
          <Slider
            gap={50}
            leftToRight
            slides={SHOWCASE_IMAGES.map((item) => {
              return (
                <div key={item} className="w-full h-60">
                  <Image
                    src={`/assets/showcase/${item}`}
                    className="w-full h-full object-cover rounded-lg"
                    alt={item}
                    width={400}
                    height={480}
                  />
                </div>
              );
            })}
          />
        </div>
      </div>
      <div className="block md:hidden mt-12 text-center">
        <Button className="text-nowrap">Explore Full Showcase</Button>
      </div>
    </section>
  );
};

export default HomepageShowcase;
