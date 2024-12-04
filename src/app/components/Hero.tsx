"use client";
import { Category } from "@mui/icons-material";
import styles from "./styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.introContainer}>
        <Image
          alt="bg logo logo"
          src="/images/bg-logo2.png"
          height={100}
          width={350}
          className={styles.imgaeBG}
        />
        <p className={styles.introHeading}>
          <span style={{ color: "#fdba74" }}> Welcome to Deal Magsil —</span>
          {/* <span style={{ fontSize: "1.8rem" }}> */} the world of precasting,
          where engineering precision and design artistry converge to create
          structures that stand the test of time.
          {/* </span> */}
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
        </div>
      </div>

      <Image
        alt="make in india logo"
        src="/images/makeinindia6.png"
        height={250}
        width={550}
        className={styles.imgaeHero}
      />
    </div>
  );
}
// consent to operate under green Category
// west bengal pollution control board
