import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-line",
        { opacity: 0, y: "100%" },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".footer-country",
            start: "top center",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <footer className="footer">
      <h2>Made in</h2>
      <div className="footer-country">
        <div>
          <p className="footer-line">Rio de</p>
        </div>
        <div>
          <p className="footer-line">Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
