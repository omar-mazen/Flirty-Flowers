import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef();
  useEffect(() => {
    const currentCursor = cursor.current;
    const mouseMove = (e) => {
      currentCursor.style.top = `${e.clientY}px`;
      currentCursor.style.left = `${e.clientX}px`;
      currentCursor.animate(
        { top: `${e.clientY}px`, left: `${e.clientX}px` },
        { duration: 1000, fill: "both" }
      );
    };

    document.addEventListener("mousemove", mouseMove);
    return () => {
      removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return <span className="custom-cursor" ref={cursor}></span>;
}
