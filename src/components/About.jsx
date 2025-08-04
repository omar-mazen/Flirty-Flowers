import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import useOnScreen from "../hooks/useOnScreen";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);
  const [isReavel, setIsReavel] = useState(false);
  const isOnScreen = useOnScreen(ref, 0.3);
  useEffect(() => {
    if (isOnScreen) setIsReavel(isOnScreen);
  }, [isOnScreen]);
  useGSAP(() => {
    gsap.fromTo(
      "#about-label",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-label",
        },
      }
    );
    if (isReavel) {
      const split = new SplitType("#about-para", {
        types: "lines",
        lineClass: "about-line",
        absolute: false,
      });
      gsap.fromTo(
        split.lines,
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.1,
          ease: "power4.inOut",
          onComplete: () => split.revert(),
        }
      );
    }
  }, [isReavel]);

  return (
    <section className="about">
      <h2 id="about-label" className="uppercase" ref={ref}>
        about
      </h2>
      <p id="about-para">
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}
