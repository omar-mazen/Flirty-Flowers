import NavBar from "./NavBar";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#brand-name",
        { y: "-100%", opacity: 0 },
        { y: 0, duration: 0.5, opacity: 1 }
      );
      gsap.fromTo(
        "#cart",
        { y: "-100%", opacity: 0 },
        { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
      );
      gsap.fromTo(
        "#menu",
        { y: "-100%", opacity: 0 },
        { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
      );
      gsap.fromTo(
        ".header-line",
        { opacity: 0, y: "100%" },
        {
          y: 0,
          delay: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".header",
          },
        }
      );
    });
    return () => ctx.revert();
  });
  return (
    <section className="landing-page">
      <NavBar />
      <Header />
    </section>
  );
}
