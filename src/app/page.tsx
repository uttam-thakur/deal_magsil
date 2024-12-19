// "use client";
// import { useRef, useEffect } from "react";
// import Hero from "./components/Hero";
// import CardItems2 from "./components/CardItems2";
// import Carouselinfra from "./components/Carouselinfra";
// import FeedbackSlider from "./components/FeedbackSlider";
// import RegistrationSection from "./components/RegistrationSection";

// import "slick-carousel/slick/slick.css";

// const Home = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (sliderRef.current) {
//         sliderRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div style={{ overflowX: "hidden" }}>
//       <div ref={sliderRef}>
//         <Hero />
//       </div>

//       <div ref={sliderRef}>
//         <CardItems2 />
//       </div>

//       <div ref={sliderRef}>
//         <Carouselinfra />
//       </div>

//       <div ref={sliderRef}>
//         <FeedbackSlider />
//       </div>
//       <RegistrationSection />
//     </div>
//   );
// };

// export default Home;

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
      {/* <div ref={(el: any) => (sectionRefs.current[0] = el)}>
        <Hero />
      </div> */}

      {/* <div ref={(el: any) => (sectionRefs.current[1] = el)}>
        <CardItems2 />
      </div>

      <div ref={(el: any) => (sectionRefs.current[2] = el)}>
        <Carouselinfra />
      </div>

      <div ref={(el: any) => (sectionRefs.current[3] = el)}>
        <FeedbackSlider />
      </div> */}

      {/* <div ref={(el: any) => (sectionRefs.current[4] = el)}>
        <RegistrationSection />
      </div> */}
    </div>
  );
};

export default Home;
