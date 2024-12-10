"use client";
import { Category } from "@mui/icons-material";
import styles from "./styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.introContainer}>
          <Image
            alt="bg logo logo"
            src="/images/bg-logo2.png"
            height={300}
            width={1250}
            className={styles.imgaeBG}
            style={{ marginTop: "155px" }}
          />
          {/* <p className={styles.introHeading}>
          <span style={{ color: "#fdba74" }}> Welcome to Deal Magsil —</span>
          the world of precasting,
          where engineering precision and design artistry converge to create
          structures that stand the test of time.
        </p>
        <p className={styles.introSubHeading}>
          Create Spaces That Speak to You Our mission is to bring your ideas to
          life by offering tailored solutions that stand the test of time. With
          an extensive collection of designs, textures, and finishes, we help
          you create spaces that are as functional as they are beautiful.
        </p>
        <p className={styles.introSubHeading}>
          Your satisfaction is our pride. Let’s build something extraordinary
          together. Welcome to a partnership that values your trust and delivers
          excellence in every detail.
        </p>
        <div className={styles.ctaContainer}>
          <p>Visit Us Today—Where Dreams Become Reality!</p>
        </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Image
              alt="make in india logo"
              // src="/images/iso&iaf.jpg"
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
                height={140}
                width={220}
                className={styles.imgaeHero}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                RECYCLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// consent to operate under green Category
// west bengal pollution control board
