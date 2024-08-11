import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Featured() {
  useGSAP(() => {
    gsap.fromTo(
      ".featured-label",
      { x: "-100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ".featured-label", end: "50% 50%" },
      },
      "featured"
    );
    gsap.fromTo(
      ".featured-img",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: `inset(0% 0% 0% 0%)`,
        duration: 3,
        ease: "power2",
        scrollTrigger: {
          trigger: ".featured-label",
          end: "50% 50%",
        },
      },
      "featured"
    );
  });
  return (
    <section className="featured">
      <div>
        <span className="uppercase featured-label">green</span>
        <img
          className="featured-img"
          src="/photo-1598838073192-05c942ede858.avif"
        />
      </div>
      <div>
        <span className="uppercase featured-label">illy</span>
        <img
          className="featured-img"
          src="/photo-1552248524-10d9a7e4841c.avif"
        />
      </div>
    </section>
  );
}
