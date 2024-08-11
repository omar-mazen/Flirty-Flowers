import { useEffect, useRef, useState } from "react";

import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [time, setTime] = useState(3);
  const [preLoader, setPreLoader] = useState(true);

  const intervalId = useRef();

  const clear = () => {
    clearInterval(intervalId.current);
    setPreLoader(false);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return clear;
  }, []);
  useEffect(() => {
    if (time == 0) clear();
  }, [time]);

  return (
    <>
      <CustomCursor />
      {preLoader ? (
        <Loader />
      ) : (
        <main className="container">
          <HeroSection />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
