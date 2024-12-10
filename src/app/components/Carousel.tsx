"use client";
import { useState, useEffect } from "react";
import styles from "../../app/components/styles/Carousel.module.css";

const images = [
  "/images/mainImage1.webp",
  "/images/mainImage2.webp",
  "/images/mainImage3.webp",
  "/images/mainImage4.webp",
  "/images/mainImage5.webp",
  "/images/mainImage6.webp",
  "/images/mainImage7.webp",
  "/images/mainImage8.webp",
  "/images/mainImage9.webp",
  //carousel image
  // "/images/cover/c1.jpg",
  // "/images/cover/c2.jpg",
  // "/images/cover/c3.jpg",
  // "/images/cover/c4.jpg",
  // "/images/cover/c9.jpg",
  // "/images/cover/c10.jpg",
  // "/images/cover/c5.jpg",
  // "/images/cover/c6.jpg",
  // "/images/cover/c7.jpg",
  // "/images/cover/c8.jpg",
  // "/images/cover/c11.webp",
  // "/images/cover/c12.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselImage}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <button className={styles.prevButton} onClick={handlePrevious}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
