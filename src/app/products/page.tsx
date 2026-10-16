// "use client";
// import React, { useEffect, useRef } from "react";
// import styles from "./page.module.css";
// import FeatureGridSlider2 from "../components/FeatureGridSlider2";
// import { introHeading, introSubHeading } from "../common/constant/products";

// const ProductInfo: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (sliderRef.current) {
//         sliderRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 5500);

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
//       <div className={styles.main}>
//         <div className={styles.introContainer}>
//           <p className={styles.introHeading}>{introHeading}</p>
//           <p className={styles.introSubHeading}>{introSubHeading}</p>
//         </div>
//       </div>

//       <div ref={sliderRef}>
//         <FeatureGridSlider2 />
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;


"use client";

import React from "react";
import styles from "./page.module.css";
import FeatureGridSlider2 from "../components/FeatureGridSlider2";

const ProductInfo: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.main}>
        <div className={styles.heroOverlay} />

        <div className={styles.introContainer}>
          <span className={styles.eyebrow}>
            DEAL MAGSIL · PRECAST CONCRETE SOLUTIONS
          </span>

          <h1 className={styles.introHeading}>
            Premium Precast Concrete Products
            <span> Built for Every Project</span>
          </h1>

          <p className={styles.introSubHeading}>
            Explore our range of paver blocks, concrete tiles, bricks,
            RCC pillars, slabs, kerb stones and customised precast
            solutions. Designed for residential, commercial and
            infrastructure projects, our products combine durability,
            functionality and a clean, professional finish.
          </p>

          <div className={styles.productHighlights}>
            <span>✓ Paver Blocks & Tiles</span>
            <span>✓ Concrete Blocks & Bricks</span>
            <span>✓ RCC & Custom Products</span>
          </div>

          <div className={styles.heroActions}>
            <a href="#products" className={styles.primaryButton}>
              Explore Our Products
              <span aria-hidden="true"> →</span>
            </a>

            <a
              href="#products"
              className={styles.secondaryButton}
            >
              View Product Range
            </a>
          </div>

          <p className={styles.heroNote}>
            Solutions for homes, commercial spaces, pathways and
            outdoor landscaping.
          </p>
        </div>

        <a
          href="#products"
          className={styles.scrollIndicator}
          aria-label="Scroll to product catalogue"
        >
          <span>Discover Our Products</span>
          <span className={styles.scrollArrow} aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      <section
        id="products"
        className={styles.productsSection}
        aria-label="Our precast concrete product catalogue"
      >
        <div className={styles.productsIntro}>
          <span className={styles.sectionEyebrow}>
            OUR PRODUCT COLLECTION
          </span>

          <h2 className={styles.sectionHeading}>
            Find the Right Product for Your Project
          </h2>

          <p className={styles.sectionDescription}>
            Browse our product range to discover suitable concrete
            solutions for construction, paving and landscaping.
            Explore the available products and their details.
          </p>
        </div>

        <FeatureGridSlider2 />
      </section>
    </div>
  );
};

export default ProductInfo;
