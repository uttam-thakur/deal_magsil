"use client";

import React, { useState } from "react";
import styles from "./styles/Certificates.module.css";

interface Certificate {
  category: string;
  images: string[];
}

const certificates: Certificate[] = [
  {
    category: "Quality Certificate",
    images: [
      "/images/certificate.jfif",
      "/images/quality-certificate-2.jpg",
      "/images/quality-certificate-3.jpg",
    ],
  },
  {
    category: "Trademark Registration",
    images: [
      "/images/iso_iaf-removebg.png",
      "/images/makeinindia6.png",
      "/images/recycle.webp",
      "/images/iso1.png",
    ],
  },
  {
    category: "Test Results",
    images: ["/images/test-results-1.jpg", "/images/test-results-2.jpg"],
  },
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    "Quality Certificate"
  );

  const activeCertificates = certificates.find(
    (cert) => cert.category === activeCategory
  );

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {certificates.map((certificate, index) => (
          <button
            key={index}
            className={`${styles.button} ${
              activeCategory === certificate.category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(certificate.category)}
          >
            {certificate.category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {activeCertificates?.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${activeCategory} ${idx + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
