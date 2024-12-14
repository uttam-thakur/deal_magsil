// "use client";
// import React, { useState } from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import FeatureGridSlider2 from "../components/FeatureGridSlider2";
// import { introHeading, introSubHeading } from "../common/constant/products";
// import FeatureGridSlider from "../components/FeatureGridSlider";
// const ProductInfo: React.FC = () => {
//   return (
//     <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
//       <div className={styles.main}>
//         <div className={styles.introContainer}>
//           <p className={styles.introHeading}>{introHeading}</p>
//           <p className={styles.introSubHeading}>{introSubHeading}</p>
//         </div>
//       </div>
//       {/* coustomer design */}
//       {/* <FeatureGridSlider /> */}
//       {/* my design */}
//       <FeatureGridSlider2 />
//     </div>
//   );
// };

// export default ProductInfo;

"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import FeatureGridSlider2 from "../components/FeatureGridSlider2";
import { introHeading, introSubHeading } from "../common/constant/products";

const ProductInfo: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>{introHeading}</p>
          <p className={styles.introSubHeading}>{introSubHeading}</p>
        </div>
      </div>
      {/* coustomer design */}
      {/* <FeatureGridSlider /> */}
      {/* my design */}
      <div ref={sliderRef}>
        <FeatureGridSlider2 />
      </div>
    </div>
  );
};

export default ProductInfo;
