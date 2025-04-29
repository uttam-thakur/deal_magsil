import React from "react";
import styles from "./styles/ProductRange.module.css";

interface Product {
  title: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    title: "PAVING BLOCKS",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Durable and stylish paving solutions for outdoor spaces.",
  },
  {
    title: "CONCRETE COBBLES",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Elegant cobblestone designs for pathways and landscapes.",
  },
  {
    title: "FLAGSTONES",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Large stone slabs perfect for patios and open areas.",
  },
  {
    title: "KERBSTONES",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Strong kerbstones to define roads and pathways.",
  },
  {
    title: "DRAIN COVERS",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Strong kerbstones to define roads and pathways.",
  },
  {
    title: "GRASS PAVERS & GEIDS",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Strong kerbstones to define roads and pathways.",
  },
  {
    title: "LANDSCAPING TILES",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Strong kerbstones to define roads and pathways.",
  },
  {
    title: "PAVEIT",
    image: "/images/4.jpg", // <-- replace with your real images
    description: "Strong kerbstones to define roads and pathways.",
  },
];

const ProductRange = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products</h2>
      <p className={styles.subheading}>
        Wide range of products to fit all your paving needs
      </p>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
