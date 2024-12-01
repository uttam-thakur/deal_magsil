"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import FeatureGridSlider2 from "../components/FeatureGridSlider2";
import { introHeading, introSubHeading } from "../common/constant/products";
const ProductInfo: React.FC = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>{introHeading}</p>
          <p className={styles.introSubHeading}>{introSubHeading}</p>
        </div>
      </div>

      {/* <FeatureGridSlider /> */}
      <FeatureGridSlider2 />
    </div>
  );
};

export default ProductInfo;
