"use client";

import { useState } from "react";
import styles from "../components/styles/welcomeCard2.module.css";
import { sectionData } from "../common/constant";
import Image from "next/image";
export default function CardItem2() {
  const [currentSlide, setCurrentSlide] = useState<number[]>( // Track the current slide for each section
    sectionData.map(() => 0)
  );

  const handleNext = (sectionIndex: number, totalSlides: number) => {
    setCurrentSlide((prev) => {
      const updatedSlides = [...prev];
      updatedSlides[sectionIndex] =
        (updatedSlides[sectionIndex] + 1) % totalSlides;
      return updatedSlides;
    });
  };

  const handlePrev = (sectionIndex: number, totalSlides: number) => {
    setCurrentSlide((prev) => {
      const updatedSlides = [...prev];
      updatedSlides[sectionIndex] =
        (updatedSlides[sectionIndex] - 1 + totalSlides) % totalSlides;
      return updatedSlides;
    });
  };

  return (
    <div className={styles.container}>
      {sectionData.map((section: any, sectionIndex: number) => (
        <div
          key={section.id}
          className={`${styles.section} ${
            section.id % 2 === 0 ? "" : styles.reverse
          }`}
        >
          {section.images?.length ? (
            <div className={styles.imageSliderContainer}>
              <div
                className={styles.slider}
                style={{
                  transform: `translateX(-${
                    currentSlide[sectionIndex] * 100
                  }%)`,
                }}
              >
                {section.images.map((image: string, index: number) => (
                  <div key={index} className={styles.slide}>
                    <Image
                      src={image}
                      alt={`Slide ${index}`}
                      width={400}
                      height={400}
                      className={styles.image}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <button
                className={styles.prevButton}
                onClick={() => handlePrev(sectionIndex, section.images.length)}
              >
                &#8249;
              </button>
              <button
                className={styles.nextButton}
                onClick={() => handleNext(sectionIndex, section.images.length)}
              >
                &#8250;
              </button>
            </div>
          ) : (
            <p>No images available for this section.</p>
          )}

          <div className={styles.textContainer}>
            <h2 className={styles.title}>{section.title}</h2>
            {section?.content?.map((contentBlock: any, index: any) => (
              <div key={index}>
                <p className={styles.subtitle}>{contentBlock.subtitle}</p>
                <ul className={styles.list}>
                  {contentBlock.details.map((detail: any, idx: any) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
