import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

export default function Gallery() {
  const [currImg, setCurrntImg] = useState(1);

  useGSAP(() => {
    let sections = gsap.utils.toArray(".gallery-item");
    gsap.to(sections, {
      ease: "none",
      xPercent: -100 * 3,
      duration: 0.2,
      scrollTrigger: {
        scrub: 1,
        trigger: ".gallery-wrap",
        pin: true,
        snap: 1 / 3,
        start: "50% 50%",
        end: () => "+=" + document.querySelector(".gallery-item").offsetWidth,
      },
    });
  });
  return (
    <section className="gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span>{currImg}</span>
          <span className="divider"></span>
          <span>{images.length}</span>
        </div>
        {images.map((img, i) => (
          <GalleryItem
            key={i}
            index={i + 1}
            category={img.category}
            title={img.title}
            subtitle={img.subtitle}
            img={img.src}
            setCurrntImg={setCurrntImg}
          />
        ))}
      </div>
    </section>
  );
}
function GalleryItem({ category, subtitle, title, img, index, setCurrntImg }) {
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) setCurrntImg(index);
  }, [setCurrntImg, onScreen, index]);
  return (
    <div className="item-wraper">
      <div className="gallery-item">
        <div
          role="img"
          className={`img ${onScreen ? "onScreen" : ""}`}
          ref={ref}
          style={{
            background: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text">
            <h2>
              <mark>{title}</mark>
            </h2>
            <h3>
              <mark>{subtitle}</mark>
            </h3>
            <h4>
              <mark>{category}</mark>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
