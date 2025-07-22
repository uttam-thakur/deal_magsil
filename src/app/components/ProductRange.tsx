import React from "react";
import styles from "./styles/ProductRange.module.css";

interface Product {
  title: string;
  image: string;
  description: string;
}

// const products: Product[] = [
//   {
//     title: "PAVING BLOCKS",
//     image: "/images/productRange/1.jpg", // <-- replace with your real images
//     description: "Durable and stylish paving solutions for outdoor spaces.",
//   },
//   {
//     title: "CONCRETE COBBLES",
//     image: "/images/productRange/2.jpg", // <-- replace with your real images
//     description: "Elegant cobblestone designs for pathways and landscapes.",
//   },
//   {
//     title: "FLAGSTONES",
//     image: "/images/productRange/3.jpg", // <-- replace with your real images
//     description: "Large stone slabs perfect for patios and open areas.",
//   },
//   {
//     title: "KERBSTONES",
//     image: "/images/productRange/4.jpg", // <-- replace with your real images
//     description: "Strong kerbstones to define roads and pathways.",
//   },
//   {
//     title: "DRAIN COVERS",
//     image: "/images/productRange/5.jpg", // <-- replace with your real images
//     description: "Strong kerbstones to define roads and pathways.",
//   },
//   {
//     title: "GRASS PAVERS & GEIDS",
//     image: "/images/productRange/6.jpg", // <-- replace with your real images
//     description: "Strong kerbstones to define roads and pathways.",
//   },
//   {
//     title: "LANDSCAPING TILES",
//     image: "/images/productRange/7.jpg", // <-- replace with your real images
//     description: "Strong kerbstones to define roads and pathways.",
//   },
//   {
//     title: "PAVEIT",
//     image: "/images/productRange/8.jpg", // <-- replace with your real images
//     description: "Strong kerbstones to define roads and pathways.",
//   },
// ];

const products: Product[] = [
  {
    title: "PAVING BLOCKS",
    image: "/images/productRange/1.jpg",
    description: "High-strength interlocking blocks ideal for driveways, walkways, and patios.",
  },
  {
    title: "CONCRETE COBBLES",
    image: "/images/productRange/2.jpg",
    description: "Classic cobblestone look with concrete durability for charming streetscapes and garden paths.",
  },
  {
    title: "FLAGSTONES",
    image: "/images/productRange/3.jpg",
    description: "Flat, broad stones perfect for patios, walkways, and stepping stone paths.",
  },
  {
    title: "KERBSTONES",
    image: "/images/productRange/4.jpg",
    description: "Heavy-duty kerbs to define edges of roads, driveways, and garden borders.",
  },
  {
    title: "DRAIN COVERS",
    image: "/images/productRange/5.jpg",
    description: "Strong and durable covers for surface water drainage systems, ensuring safety and accessibility.",
  },
  {
    title: "GRASS PAVERS & GRIDS",
    image: "/images/productRange/6.jpg",
    description: "Eco-friendly grid systems that allow grass growth while providing ground stability for parking and walkways.",
  },
  {
    title: "LANDSCAPING TILES",
    image: "/images/productRange/7.jpg",
    description: "Stylish concrete tiles ideal for enhancing gardens, terraces, and outdoor landscapes.",
  },
  {
    title: "PAVEIT",
    image: "/images/productRange/8.jpg",
    description: "Premium paving solution designed for easy installation and long-lasting outdoor surfaces.",
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
