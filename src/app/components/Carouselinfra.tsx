"use client";

import React, { useState } from "react";
import { heroSectionH1, heroSectionH2, cards } from "../common/constant/home";
import styles from "../components/styles/Carouselinfra.module.css";

const Carouselinfra = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1>{heroSectionH1}</h1>
          <h2>{heroSectionH2}</h2>
        </div>

        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardContent}>{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carouselinfra;
