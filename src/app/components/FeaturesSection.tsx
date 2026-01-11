import React from "react";
import styles from "./styles/FeaturesSection.module.css";
import { FaCog, FaHardHat, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaCog size={50} />,
    title: "Advanced Technology",
    description:
      "These advanced technologies improve the efficiency, sustainability, and performance of precast concrete slabs.",
  },
  {
    icon: <FaHardHat size={50} />,
    title: "Expert Engineers",
    description:
      "These expert engineers work together to design, manufacture high-quality precast concrete slabs.",
  },
  {
    icon: <FaClock size={50} />,
    title: "Delivery On Time",
    description:
      "Delivery can be ensured on time, reducing delays and project costs, customer satisfaction and operational efficiency.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
