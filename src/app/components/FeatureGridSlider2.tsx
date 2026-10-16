// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Modal from "./common-components/Modal";
// import styles from "../components/styles/FeatureGridSlider2.module.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Box, Typography, Button, CardMedia, Grid } from "@mui/material";

// import {
//   precastItems,
//   precastItemsWhatsapp,
// } from "../products/ProductsConstants";
// import { contactOnWhatsapp } from "../common/helper";
// import { whatsappNumber } from "../common/constant/index";
// type PrecastItem = {
//   images: string[];
//   title: string;
//   description: string;
//   subDescription?: string;
//   specification?: string;
// };

// const FeatureGridSlider2 = () => {
//   const [selectedItem, setSelectedItem] = useState<PrecastItem | any>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleOpenModal = (item: PrecastItem) => {
//     setSelectedItem(item);
//   };

//   const handleCloseModal = () => {
//     setSelectedItem(null);
//   };

//   const handleBuyNow = (item: PrecastItem) => {
//     const message = `💬 Hello! 👋
// I'm really interested in your amazing product:
// 📖 "${item.title}"
// Could you please share more details? I'd love to know more!

// Looking forward to your reply. 😊`;
//     contactOnWhatsapp(whatsappNumber, message);
//   };

//   const filteredItems = precastItemsWhatsapp.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className={styles.container}>
//       {/* Search Bar */}
//       <div className={styles.searchBarContainer}>
//         <input
//           type="text"
//           placeholder="Search Products"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={styles.searchbar}
//         />
//       </div>

//       {/* Items Section */}
//       {filteredItems.length > 0 ? (
//         filteredItems.map((item: any, index: any) => (
//           <div
//             key={index}
//             className={`${styles.section} ${
//               index % 2 === 1 ? styles.reverse : ""
//             }`}
//             data-aos={index % 2 === 1 ? "fade-left" : "fade-right"} // Apply scroll-triggered animation
//           >
//             {/* Image Section */}
//             <div className={styles.imageContainer}>
//               <Image
//                 src={item.images[0]} // Show the first image
//                 alt={item.title}
//                 width={400}
//                 height={400}
//                 className={styles.image}
//               />
//             </div>

//             {/* Text Section */}
//             <div className={styles.textContainer}>
//               <h2 className={styles.title}>{item.title}</h2>
//               <p className={styles.subtitle}>
//                 {item.description.substring(0, 120)}...
//               </p>
//               <Button
//                 variant="contained"
//                 onClick={() => handleOpenModal(item)}
//                 sx={{
//                   backgroundColor: "rgb(24, 92, 160)",
//                   "&:hover": { backgroundColor: "darkred" },
//                   color: "white",
//                   marginTop: "1rem",
//                 }}
//               >
//                 READ MORE
//               </Button>
//               <Button
//                 onClick={() => handleBuyNow(item)}
//                 sx={{
//                   backgroundColor: "rgb(24, 92, 140)",
//                   marginLeft: "20px",
//                   "&:hover": { backgroundColor: "green" },
//                   color: "white",
//                   marginTop: "1rem",
//                 }}
//               >
//                 Buy Now
//               </Button>
//               {/* Horizontal Line */}

//               <div
//                 style={{
//                   width: "80%",
//                   height: "1px",
//                   backgroundColor: "gold",
//                   margin: "1rem auto 0",
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className={styles.noResults}>
//           <Image
//             src="/images/noProductFound.png"
//             alt="No Products Found"
//             width={300}
//             height={200}
//           />
//           <Typography variant="body1">
//             No products found matching "{searchTerm}".
//           </Typography>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedItem && (
//         <Modal open={!!selectedItem}>
//           <Box
//             sx={{
//               backgroundColor: "#fff",
//               padding: { xs: "1rem", md: "2rem" },
//               borderRadius: "10px",
//               width: { xs: "90%", md: "60%" },
//               maxHeight: "80vh",
//               overflowY: "auto",
//               margin: "0 auto",
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 marginTop: "1rem",
//                 fontWeight: "700",
//                 fontSize: { xs: "1.2rem", md: "1.5rem" },
//               }}
//             >
//               {selectedItem.title}
//             </Typography>

//             <Grid
//               container
//               spacing={2}
//               sx={{
//                 marginTop: "1rem",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {selectedItem.images.map((image: any, index: any) => (
//                 <Grid
//                   item
//                   xs={12}
//                   sm={6}
//                   md={4}
//                   lg={3}
//                   key={index}
//                   sx={{
//                     padding: "0.5rem",
//                   }}
//                 >
//                   <img
//                     src={image}
//                     alt={`${selectedItem.title} - Slide ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "auto",
//                       borderRadius: "10px",
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = "scale(1.05)";
//                       e.currentTarget.style.boxShadow =
//                         "0 8px 12px rgba(0, 0, 0, 0.2)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = "scale(1)";
//                       e.currentTarget.style.boxShadow =
//                         "0 4px 6px rgba(0, 0, 0, 0.15)";
//                     }}
//                   />
//                 </Grid>
//               ))}
//             </Grid>

//             <Typography
//               variant="body2"
//               sx={{
//                 margin: "1rem 0",
//                 lineHeight: "1.5",
//                 letterSpacing: "1px",
//                 fontSize: { xs: "0.9rem", md: "1rem" },
//               }}
//             >
//               {selectedItem.description}
//             </Typography>

//             <Typography
//               variant="body2"
//               sx={{
//                 margin: "1rem 0",
//                 lineHeight: "1.5",
//                 letterSpacing: "1px",
//                 fontSize: { xs: "0.9rem", md: "1rem" },
//                 textAlign: "left",
//               }}
//             >
//               <strong>Sub Description:</strong>
//               <ul>
//                 {selectedItem?.subDescription?.length > 0 ? (
//                   selectedItem?.subDescription.map((item: any, index: any) => (
//                     <li key={index}>{item}</li>
//                   ))
//                 ) : (
//                   <li>N/A</li>
//                 )}
//               </ul>
//             </Typography>

//             <Typography
//               variant="body2"
//               sx={{
//                 margin: "1rem 0",
//                 lineHeight: "1.5",
//                 letterSpacing: "1px",
//                 fontSize: { xs: "0.9rem", md: "1rem" },
//                 textAlign: "left",
//               }}
//             >
//               <strong>Specification:</strong>
//               <ul>
//                 {selectedItem?.specification?.length > 0 ? (
//                   selectedItem?.specification.map((item: any, index: any) => (
//                     <li
//                       key={index}
//                       dangerouslySetInnerHTML={{ __html: item }}
//                     />
//                   ))
//                 ) : (
//                   <li>N/A</li>
//                 )}
//               </ul>
//             </Typography>

//             <Button
//               variant="outlined"
//               color="primary"
//               onClick={handleCloseModal}
//               sx={{
//                 marginTop: "1rem",
//                 fontSize: { xs: "0.8rem", md: "1rem" },
//                 backgroundColor: "rgb(21,80,139)",
//                 "&:hover": {
//                   backgroundColor: "darkred",
//                 },
//                 color: "white",
//               }}
//             >
//               Close
//             </Button>
//           </Box>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default FeatureGridSlider2;



"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Modal from "./common-components/Modal";
import styles from "../components/styles/FeatureGridSlider2.module.css";

import {
  precastItemsWhatsapp,
} from "../products/ProductsConstants";

import { contactOnWhatsapp } from "../common/helper";
import { whatsappNumber } from "../common/constant/index";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
  subDescription?: string[];
  specification?: string[];
};

const products = precastItemsWhatsapp as PrecastItem[];

const FeatureGridSlider2: React.FC = () => {
  const [selectedItem, setSelectedItem] =
    useState<PrecastItem | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return products;

    return products.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        ...(item.subDescription ?? []),
        ...(item.specification ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchTerm]);

  const handleBuyNow = (item: PrecastItem) => {
    const message = [
      "Hello Deal Magsil,",
      "",
      "I am interested in the following product:",
      `Product: ${item.title}`,
      "",
      "Please share the available sizes, specifications, pricing,",
      "minimum order quantity (if applicable), and delivery details.",
      "",
      "Thank you.",
    ].join("\n");

    contactOnWhatsapp(whatsappNumber, message);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      {/* Catalogue heading */}
      <div className={styles.catalogueHeader}>
        <div>
          <span className={styles.catalogueEyebrow}>
            DEAL MAGSIL PRODUCT COLLECTION
          </span>

          <h2 className={styles.catalogueTitle}>
            Explore Our Products
          </h2>

          <p className={styles.catalogueDescription}>
            Discover precast concrete solutions for construction,
            paving, outdoor spaces and landscaping. Select a product
            to explore its details or contact us for an enquiry.
          </p>
        </div>

        <div className={styles.productCount}>
          <span>{filteredItems.length}</span>
          <small>
            {filteredItems.length === 1 ? "Product" : "Products"}
          </small>
        </div>
      </div>

      {/* Search */}
      <div className={styles.searchBarContainer}>
        <span className={styles.searchIcon} aria-hidden="true">
          ⌕
        </span>

        <input
          type="search"
          aria-label="Search products"
          placeholder="Search by product name or description..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className={styles.searchbar}
        />

        {searchTerm && (
          <button
            type="button"
            className={styles.clearSearch}
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Product list */}
      {filteredItems.length > 0 ? (
        <div className={styles.productList}>
          {filteredItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`${styles.section} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
            >
              {/* Product image */}
              <div className={styles.imageContainer}>
                {item.images?.[0] ? (
                  <Image
                    src={item.images[0]}
                    alt={`${item.title} - Deal Magsil precast concrete product`}
                    width={700}
                    height={520}
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    Product image coming soon
                  </div>
                )}

                <span className={styles.imageBadge}>
                  PRECAST CONCRETE
                </span>
              </div>

              {/* Product information */}
              <div className={styles.textContainer}>
                <span className={styles.productLabel}>
                  PRODUCT {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className={styles.title}>{item.title}</h3>

                <p className={styles.subtitle}>
                  {item.description}
                </p>

                {item.subDescription?.length ? (
                  <ul className={styles.list}>
                    {item.subDescription.slice(0, 3).map(
                      (detail, detailIndex) => (
                        <li key={`${detailIndex}-${detail}`}>
                          {detail}
                        </li>
                      )
                    )}
                  </ul>
                ) : null}

                <div className={styles.buttonGroup}>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => setSelectedItem(item)}
                    className={styles.detailsButton}
                  >
                    View Product Details
                    <span aria-hidden="true"> →</span>
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={() => handleBuyNow(item)}
                    className={styles.enquiryButton}
                  >
                    Enquire on WhatsApp
                  </Button>
                </div>

                <div className={styles.productDivider} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon} aria-hidden="true">
            ⌕
          </div>

          <h3>No products found</h3>

          <p>
            We couldn&apos;t find a product matching &quot;
            {searchTerm}&quot;. Try another product name or keyword.
          </p>

          <Button
            variant="contained"
            onClick={() => setSearchTerm("")}
            className={styles.resetButton}
          >
            View All Products
          </Button>
        </div>
      )}

      {/* Product details modal */}
      {selectedItem && (
        <Modal open={Boolean(selectedItem)}>
          <Box className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalEyebrow}>
                  DEAL MAGSIL · PRODUCT DETAILS
                </span>

                <Typography
                  component="h2"
                  className={styles.modalTitle}
                >
                  {selectedItem.title}
                </Typography>
              </div>

              <button
                type="button"
                className={styles.modalClose}
                onClick={handleCloseModal}
                aria-label="Close product details"
              >
                ×
              </button>
            </div>

            {/* Product gallery */}
            {selectedItem.images?.length ? (
              <div className={styles.modalGallery}>
                {selectedItem.images.map((image, index) => (
                  <div
                    className={styles.modalImageWrapper}
                    key={`${image}-${index}`}
                  >
                    <Image
                      src={image}
                      alt={`${selectedItem.title} image ${index + 1}`}
                      width={600}
                      height={450}
                      sizes="(max-width: 600px) 100vw, 33vw"
                      className={styles.modalImage}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Full description */}
            <section className={styles.modalSection}>
              <h3>Product Overview</h3>

              <p className={styles.modalDescription}>
                {selectedItem.description}
              </p>
            </section>

            {/* Features */}
            <section className={styles.modalSection}>
              <h3>Features & Details</h3>

              {selectedItem.subDescription?.length ? (
                <ul className={styles.modalList}>
                  {selectedItem.subDescription.map(
                    (detail, index) => (
                      <li key={`${index}-${detail}`}>
                        {detail}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className={styles.mutedText}>
                  Contact us for more product information.
                </p>
              )}
            </section>

            {/* Specifications */}
            <section className={styles.modalSection}>
              <h3>Specifications</h3>

              {selectedItem.specification?.length ? (
                <ul className={styles.modalList}>
                  {selectedItem.specification.map(
                    (specification, index) => (
                      <li key={`${index}-${specification}`}>
                        {specification}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className={styles.mutedText}>
                  Please enquire for available sizes and
                  specifications.
                </p>
              )}
            </section>

            {/* Modal actions */}
            <div className={styles.modalActions}>
              <Button
                variant="contained"
                disableElevation
                onClick={() => handleBuyNow(selectedItem)}
                className={styles.modalEnquiryButton}
              >
                Enquire on WhatsApp
              </Button>

              <Button
                variant="outlined"
                onClick={handleCloseModal}
                className={styles.modalDismissButton}
              >
                Close Details
              </Button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default FeatureGridSlider2;
