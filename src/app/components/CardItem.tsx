"use client";

import Image from "next/image";
import styles from "../components/styles/welcomeCard.module.css";
import { sectionData } from "../common/constant";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {sectionData.map((section: any) => (
        <div
          key={section.id}
          className={`${styles.section} ${
            section.id % 2 === 0 ? "" : styles.reverse
          }`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={section.image}
              alt={section.altText}
              width={400}
              height={400}
              className={styles.image}
            />
          </div>

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
