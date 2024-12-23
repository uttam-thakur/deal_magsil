"use client";
import styles from "./styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.introContainer}>
          <div className={styles.imageLogo}>
            <Image
              alt="bg logo logo"
              src="/images/bacgroundImageLogo.png"
              height={450}
              width={850}
              className={styles.imgaeBG}
            />
          </div>
          <p className={styles.introHeading}>
            <span style={{ color: "#fdba74" }}> Welcome to Deal Magsil —</span>
            the world of precasting, where engineering precision and design
            artistry converge to create structures that stand the test of time.
          </p>

          <div className={styles.div}>
            <Image
              alt="make in india logo"
              src="/images/iso_iaf-removebg.png"
              height={170}
              width={400}
              className={styles.imgaeHero}
            />
            <Image
              alt="make in india logo"
              src="/images/makeinindia6.png"
              height={170}
              width={400}
              className={styles.imgaeHero}
            />
            <div
              style={{
                position: "relative",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              <Image
                alt="Recycle image"
                src="/images/recycle.webp"
                height={170}
                width={220}
                className={styles.imgaeHero}
              />
              <span className={styles.span}>RECYCLE CONCRETING</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
