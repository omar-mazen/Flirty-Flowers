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
  if (!isReavel) return;

  const split = new SplitType("#about-para", {
    types: "lines",
    lineClass: "about-line",
    absolute: false,
  });

  gsap.set(split.lines, { opacity: 1 });

  gsap.fromTo(
    split.lines,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: () => split.revert(), // Optional
    }
  );
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
