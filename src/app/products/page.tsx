"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import UpcomingProduct from "../components/UpcomingProduct";
import FeatureGrid from "../components/FeatureGrid";
import FeatureGridSlider from "../components/FeatureGridSlider";
import { products } from "./ProductsConstants";
import FeatureGridSlider2 from "../components/FeatureGridSlider2";

const ProductInfo: React.FC = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            Discover Premium Precast Cement Products
          </p>
          <p className={styles.introSubHeading}>
            Explore our wide range of durable and versatile precast items,
            perfect for construction, urban design, and landscaping.
          </p>
        </div>
      </div>

      {/* <FeatureGridSlider /> */}
      <FeatureGridSlider2 />
    </div>
  );
};

export default ProductInfo;
