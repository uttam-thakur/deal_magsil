//auto scroll
"use client";
import { useRef, useEffect } from "react";
import Hero from "./components/Hero";
import CardItems2 from "./components/CardItems2";
import Carouselinfra from "./components/Carouselinfra";
import FeedbackSlider from "./components/FeedbackSlider";
import RegistrationSection from "./components/RegistrationSection";

import "slick-carousel/slick/slick.css";

const Home = () => {
  // Ref to store multiple section references
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Array of time intervals for each section (in milliseconds)
  const displayTimes = [2000, 3000, 2500, 1500, 4000]; // Adjust durations as needed

  useEffect(() => {
    let currentSection = 0;

    const scrollToNextSection = () => {
      if (currentSection < sectionRefs.current.length) {
        const targetSection = sectionRefs.current[currentSection];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
        currentSection++;
        if (currentSection < displayTimes.length) {
          timeoutId = setTimeout(
            scrollToNextSection,
            displayTimes[currentSection]
          );
        }
      }
    };

    // Set timeoutId variable to store the timeout ID
    let timeoutId = setTimeout(
      scrollToNextSection,
      displayTimes[currentSection]
    );

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Hero />
      <RegistrationSection />
    </div>
  );
};

export default Home;
