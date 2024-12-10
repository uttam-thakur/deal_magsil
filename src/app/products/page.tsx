"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import FeatureGridSlider2 from "../components/FeatureGridSlider2";
import { introHeading, introSubHeading } from "../common/constant/products";
import FeatureGridSlider from "../components/FeatureGridSlider";
const ProductInfo: React.FC = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <Image
            alt="bg logo logo"
            src="/images/bg-logo2.png"
            height={200}
            width={550}
            className={styles.imgaeBG}
          />
          <p className={styles.introHeading}>{introHeading}</p>
          <p className={styles.introSubHeading}>{introSubHeading}</p>
        </div>
      </div>
      {/* coustomer design */}
      {/* <FeatureGridSlider /> */}
      {/* my design */}
      <FeatureGridSlider2 />
    </div>
  );
};

export default ProductInfo;
