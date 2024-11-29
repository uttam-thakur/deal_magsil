import Image from "next/image";
import styles from "../components/styles/welcomeCard.module.css";
import Carousel from "./Carousel";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Section 1 */}
      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/mainImage1.webp"
            alt="Virtual Property Exploration"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            The Process and Benefits of Precast Concrete
          </h2>
          <ul className={styles.list}>
            <p className={styles.subtitle}>Process</p>

            <li>
              Custom molds are created to match exact project specifications.
            </li>
            <li>
              Concrete is poured and cured in a factory setting for optimal
              quality.
            </li>
            <li>
              Seaml Precast components are transported and assembled efficiently
              on-site.
            </li>
            <p className={styles.subtitle}>Benefits</p>

            <li> Built to withstand extreme conditions and heavy loads.</li>
            <li> Reduces on-site work, ensuring quicker project completion.</li>
            <li>
              Minimizes material waste and promotes sustainable practices.
            </li>

            <li> Perfect for infrastructure, buildings, and custom designs.</li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/mainImage5.webp"
            alt="On-Site Expertise"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>On-Site Expertise</h2>
          <p className={styles.subtitle}>Trust in Our Specialists</p>

          <ul className={styles.list}>
            <li>
              Since 1991, we’ve set benchmarks in the construction industry with
              a commitment to quality, speed, and service.
            </li>
            <li>
              We use 100% clear, virgin raw materials and manufacture products
              under precision with advanced automated machinery.
            </li>
            <li>
              Our innovative concrete products are cost-effective,
              maintenance-free, environmentally friendly, and superior to
              conventional materials.
            </li>
            <li>
              We continuously improve by adopting modern technologies and
              enhancing the skills of our team to exceed customer expectations.
            </li>
            <li>
              The <strong>DEAL MAGSIL</strong> brand is synonymous with
              exceptional quality, advanced technology, and sustainable
              solutions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
