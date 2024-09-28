import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useAnimations = () => {
  useGSAP(() => {
    // Nav and banner text animation
    gsap
      .to(".site__header", { opacity: 1, delay: 1, translateY: 0 })
      .then(() => {
        gsap.to(".home__banner_text", { opacity: 1, delay: 0.5 });
      });

    // Expertise section animation
    gsap
      .to(".expertise__heading", {
        translateY: 0,
        scrollTrigger: { trigger: ".expertise__section", start: "50% bottom" },
      })
      .then(() => {
        gsap.to(".expertise__text", { opacity: 1 });
      });

    // Expertise section animation
    gsap
      .to(".founder__heading", {
        translateY: 0,
        stagger: 0.1,
        scrollTrigger: { trigger: ".founder__section", start: "50% bottom" },
      })
      .then(() => {
        gsap.to(".founder__slider", { opacity: 1, delay: 0.5 });
      });

    gsap
      .to(".home__showcase_slide_up", {
        translateY: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".home__showcase_section",
          start: "50% bottom",
        },
      })
      .then(() => {
        gsap.to(".home__showcase_fade_in", {
          opacity: 1,
          delay: 0.5,
        });
      });

    gsap.to(".homage__faqs_fade_in", {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".homapge__faqs_section",
        start: "50% bottom",
      },
    });
  });
};

export default useAnimations;
