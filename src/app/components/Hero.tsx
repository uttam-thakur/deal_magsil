// "use client";
// import styles from "./styles/Hero.module.css";
// import Image from "next/image";
// import { useEffect } from "react";

// export default function Hero() {
//  useEffect(() => {
//     const isMobile = window.innerWidth <= 768;

//     if (isMobile) {
//       document.body.style.overflowX = "hidden";
//     }

//     return () => {
//       document.body.style.overflowX = "auto";
//     };
//   }, []);
//   return (
//     <>
    
//       <div className={styles.heroSection}>
//         <div className={styles.introContainer}>
//           <div className={styles.imageLogo}>
//             <Image
//               alt="bg logo logo"
//               src="/images/bacgroundImageLogo.png"
//               height={450}
//               width={850}
//               className={styles.imgaeBG}
//             />
//           </div>
//           <p className={styles.introHeading}>
//             <span style={{ color: "#fdba74" }}> Welcome to Deal Magsil — </span>
//             the world of precasting, where engineering precision and design
//             artistry converge to create structures that stand the test of time.
//           </p>

//         </div>
//       </div>
//     </>
//   );
// }


//second version
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "./styles/Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       {/* Background Image */}
//       <div className={styles.background}>
//         <Image
//           src="/images/cover/bg1.jpeg"
//           alt="Deal Magsil precast concrete and paving products"
//           fill
//           priority
//           sizes="100vw"
//           className={styles.backgroundImage}
//         />
//       </div>

//       {/* Professional dark overlays */}
//       <div className={styles.overlay} />
//       <div className={styles.overlayGradient} />


//       {/* Main Hero */}
//       <div className={styles.heroContent}>
//         <div className={styles.contentLeft}>
//           <div className={styles.badge}>
//             <span className={styles.badgeDot} />
//             PRECAST & PAVING SOLUTIONS
//           </div>

//           <h1>
//             Built for Strength.
//             <br />
//             <span>Designed for Progress.</span>
//           </h1>

//           <p className={styles.description}>
//             Reliable concrete and precast solutions for roads, buildings,
//             landscapes and infrastructure projects — from paving blocks and
//             tiles to RCC blocks and engineered precast products.
//           </p>

//           <div className={styles.productTags}>
//             <span>Paving Blocks</span>
//             <span>RCC Blocks</span>
//             <span>Tiles</span>
//             <span>Precast Products</span>
//           </div>

//           <div className={styles.actions}>
//             <Link href="/products" className={styles.primaryButton}>
//               Explore Products
//               <span>→</span>
//             </Link>

//             <a
//               href="https://wa.me/919332331442?text=Hello%20Deal%20Magsil%2C%20I%20would%20like%20to%20get%20a%20quote."
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondaryButton}
//             >
//               <span className={styles.whatsappIcon}>◉</span>
//               Talk to Us
//             </a>
//           </div>
//         </div>

//         {/* Right information card */}
//         <div className={styles.heroCard}>
//           <div className={styles.cardTop}>
//             <span>DEAL MAGSIL</span>
//             <span className={styles.cardLine} />
//           </div>

//           <h2>
//             Concrete solutions
//             <br />
//             <span>that last.</span>
//           </h2>

//           <p>
//             Quality paving and precast products for residential, commercial
//             and infrastructure requirements.
//           </p>

//           <div className={styles.cardProducts}>
//             <div>
//               <strong>01</strong>
//               <span>Pavers</span>
//             </div>

//             <div>
//               <strong>02</strong>
//               <span>RCC Blocks</span>
//             </div>

//             <div>
//               <strong>03</strong>
//               <span>Precast</span>
//             </div>
//           </div>

//           <Link href="/contact" className={styles.cardLink}>
//             Discuss your requirement <span>↗</span>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom trust strip */}
//       <div className={styles.bottomBar}>
//         <div className={styles.bottomItem}>
//           <strong>QUALITY</strong>
//           <span>Built for dependable performance</span>
//         </div>

//         <div className={styles.separator} />

//         <div className={styles.bottomItem}>
//           <strong>PRECISION</strong>
//           <span>Manufactured with consistency</span>
//         </div>

//         <div className={styles.separator} />

//         <div className={styles.bottomItem}>
//           <strong>DELIVERY</strong>
//           <span>Solutions for projects of every scale</span>
//         </div>

//         <div className={styles.scrollText}>
//           SCROLL
//           <span>↓</span>
//         </div>
//       </div>
//     </section>
//   );
// }

//third version
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "./styles/Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.heroImage}>
//         <Image
//           src="/images/cover/bg3.jpg"
//           alt="Deal Magsil precast concrete products and manufacturing facility"
//           fill
//           priority
//           sizes="100vw"
//           className={styles.backgroundImage}
//         />
//       </div>

//       <div className={styles.darkOverlay} />
//       <div className={styles.leftGradient} />
//       <div className={styles.bottomGradient} />

//       <div className={styles.heroContent}>
//         <div className={styles.content}>
//           <div className={styles.eyebrow}>
//             <span />
//             PRECAST CONCRETE & PAVING SOLUTIONS
//           </div>

//           <h1>
//             Built to Last.
//             <br />
//             <span>Made for the Way Forward.</span>
//           </h1>

//           <p className={styles.description}>
//             Quality paving, concrete and precast solutions engineered for
//             residential, commercial and infrastructure projects.
//           </p>

//           <div className={styles.products}>
//             <div className={styles.product}>
//               <span>01</span>
//               <strong>PAVERS</strong>
//             </div>

//             <div className={styles.product}>
//               <span>02</span>
//               <strong>RCC BLOCKS</strong>
//             </div>

//             <div className={styles.product}>
//               <span>03</span>
//               <strong>TILES</strong>
//             </div>

//             <div className={styles.product}>
//               <span>04</span>
//               <strong>PRECAST</strong>
//             </div>
//           </div>

//           <div className={styles.actions}>
//             <Link href="/products" className={styles.primaryButton}>
//               Explore Products
//               <span>↗</span>
//             </Link>

//             <a
//               href="https://wa.me/919332331442?text=Hello%20Deal%20Magsil%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondaryButton}
//             >
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className={styles.bottomInfo}>
//         <div className={styles.bottomLine} />

//         <p>
//           DEAL MAGSIL
//           <span>PRECAST • PAVERS • BLOCKS • TILES</span>
//         </p>
//       </div>

//       <div className={styles.scrollIndicator}>
//         <span>SCROLL</span>
//         <i />
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background image */}
      <div className={styles.background}>
        <Image
          src="/images/cover/bg3.jpg"
          alt="Deal Magsil precast concrete and paving products"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>

      {/* Image treatment */}
      <div className={styles.overlay} />
      <div className={styles.leftShade} />
      <div className={styles.bottomShade} />

      {/* Decorative architectural lines */}
      <div className={styles.verticalLine} />
      <div className={styles.topLabel}>
        DEAL MAGSIL
      </div>

      {/* Main content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.smallHeading}>
            PRECAST CONCRETE · PAVING · BUILDING MATERIALS
          </div>

          <h1>
            Quality that
            <br />
            <span>stands strong.</span>
          </h1>

          <p className={styles.description}>
            Premium paving, concrete and precast solutions for homes,
            commercial spaces and infrastructure projects.
          </p>

          <div className={styles.actions}>
            <Link
              href="/products"
              className={styles.primaryButton}
            >
              Explore Products
              <span>↗</span>
            </Link>

            <a
              href="https://wa.me/919332331442?text=Hello%20Deal%20Magsil%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textButton}
            >
              Talk to our team
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right product panel */}
        <div className={styles.productPanel}>
          <div className={styles.panelHeading}>
            <span>OUR SOLUTIONS</span>
            <i />
          </div>

          <div className={styles.solutionList}>
            <div className={styles.solution}>
              <span className={styles.solutionNumber}>01</span>

              <div>
                <h3>Paving Blocks</h3>
                <p>
                  Durable surfaces for driveways, pathways and outdoor spaces.
                </p>
              </div>

              <span className={styles.arrow}>↗</span>
            </div>

            <div className={styles.solution}>
              <span className={styles.solutionNumber}>02</span>

              <div>
                <h3>RCC Blocks</h3>
                <p>
                  Reliable concrete products for strong construction.
                </p>
              </div>

              <span className={styles.arrow}>↗</span>
            </div>

            <div className={styles.solution}>
              <span className={styles.solutionNumber}>03</span>

              <div>
                <h3>Tiles & Pavers</h3>
                <p>
                  Practical and attractive solutions for modern spaces.
                </p>
              </div>

              <span className={styles.arrow}>↗</span>
            </div>

            <div className={styles.solution}>
              <span className={styles.solutionNumber}>04</span>

              <div>
                <h3>Precast Products</h3>
                <p>
                  Engineered products for commercial and infrastructure needs.
                </p>
              </div>

              <span className={styles.arrow}>↗</span>
            </div>
          </div>

          <Link
            href="/products"
            className={styles.panelLink}
          >
            View complete product range
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Bottom information */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <span className={styles.orangeLine} />

          <span>
            PRECAST
          </span>

          <b>•</b>

          <span>
            PAVERS
          </span>

          <b>•</b>

          <span>
            RCC BLOCKS
          </span>

          <b>•</b>

          <span>
            TILES
          </span>
        </div>

        <div className={styles.scroll}>
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </div>
    </section>
  );
}