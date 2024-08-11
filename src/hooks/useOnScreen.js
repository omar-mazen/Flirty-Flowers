import { useEffect, useState } from "react";

export default function useOnScreen(ref, threshold = 0.3) {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersect(entry?.isIntersecting ?? false);
      },
      { rootMargin: "0px", threshold }
    );

    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, threshold]);
  return isIntersect;
}
