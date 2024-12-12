// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Box, Typography, Button } from "@mui/material";
// import Modal from "./common-components/Modal";
// import styles from "../components/styles/FeatureGridSlider2.module.css";

// import { precastItems } from "../products/ProductsConstants";

// type PrecastItem = {
//   images: string[];
//   title: string;
//   description: string;
// };

// const FeatureGridSlider2 = () => {
//   const [selectedItem, setSelectedItem] = useState<PrecastItem | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleOpenModal = (item: PrecastItem) => {
//     setSelectedItem(item);
//   };

//   const handleCloseModal = () => {
//     setSelectedItem(null);
//   };

//   const filteredItems = precastItems.filter((item) =>
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
//         filteredItems.map((item, index) => (
//           <div
//             className={`${styles.section} ${
//               index % 2 === 1 ? styles.reverse : ""
//             }`}
//             key={index}
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
//               width: { xs: "100%", md: "60%" },
//               maxHeight: "80vh",
//               overflowY: "auto",
//               margin: "0 auto",
//               textAlign: "center",
//             }}
//           >
//             <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
//               {selectedItem.title}
//             </Typography>
//             <div>
//               {selectedItem.images.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image}
//                   alt={`${selectedItem.title} - Slide ${index + 1}`}
//                   width={300}
//                   height={200}
//                   style={{
//                     margin: "0.5rem",
//                     borderRadius: "8px",
//                     display: "inline-block",
//                     width: window.innerWidth <= 500 ? "100%" : "400px", // Adjust width for mobile
//                     height: "auto", // Keep aspect ratio
//                     marginLeft: "1px",
//                   }}
//                 />
//               ))}
//             </div>
//             <Typography variant="body2" sx={{ margin: "1rem 0" }}>
//               {selectedItem.description}
//             </Typography>
//             <Button
//               variant="outlined"
//               color="primary"
//               onClick={handleCloseModal}
//               sx={{ marginTop: "1rem" }}
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

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./common-components/Modal";
import styles from "../components/styles/FeatureGridSlider2.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Button, CardMedia, Grid } from "@mui/material";

import {
  precastItems,
  precastItemsWhatsapp,
} from "../products/ProductsConstants";
import { contactOnWhatsapp } from "../common/helper";
import { whatsappNumber } from "../common/constant/index";
type PrecastItem = {
  images: string[];
  title: string;
  description: string;
  subDescription?: string;
  specification?: string;
};

const FeatureGridSlider2 = () => {
  const [selectedItem, setSelectedItem] = useState<PrecastItem | any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleOpenModal = (item: PrecastItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleBuyNow = (item: PrecastItem) => {
    const message = `Hello, I am interested in buying "${item.title}". Please provide more details.`;
    contactOnWhatsapp(whatsappNumber, message);
  };

  const filteredItems = precastItemsWhatsapp.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchbar}
        />
      </div>

      {/* Items Section */}
      {filteredItems.length > 0 ? (
        filteredItems.map((item: any, index: any) => (
          <div
            key={index}
            className={`${styles.section} ${
              index % 2 === 1 ? styles.reverse : ""
            }`}
            data-aos={index % 2 === 1 ? "fade-left" : "fade-right"} // Apply scroll-triggered animation
          >
            {/* Image Section */}
            <div className={styles.imageContainer}>
              <Image
                src={item.images[0]} // Show the first image
                alt={item.title}
                width={400}
                height={400}
                className={styles.image}
              />
            </div>

            {/* Text Section */}
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.subtitle}>
                {item.description.substring(0, 120)}...
              </p>
              <Button
                variant="contained"
                onClick={() => handleOpenModal(item)}
                sx={{
                  backgroundColor: "rgb(24, 92, 160)",
                  "&:hover": { backgroundColor: "darkred" },
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                READ MORE
              </Button>
              <Button
                onClick={() => handleBuyNow(item)}
                sx={{
                  backgroundColor: "rgb(24, 92, 140)",
                  marginLeft: "20px",
                  "&:hover": { backgroundColor: "green" },
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                Buy Now
              </Button>
              {/* Horizontal Line */}

              <div
                style={{
                  width: "80%",
                  height: "1px",
                  backgroundColor: "gold",
                  margin: "1rem auto 0",
                }}
              ></div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noResults}>
          <Image
            src="/images/noProductFound.png"
            alt="No Products Found"
            width={300}
            height={200}
          />
          <Typography variant="body1">
            No products found matching "{searchTerm}".
          </Typography>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <Modal open={!!selectedItem}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "1rem", md: "2rem" },
              borderRadius: "10px",
              width: { xs: "90%", md: "60%" },
              maxHeight: "80vh",
              overflowY: "auto",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginTop: "1rem",
                fontWeight: "700",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              {selectedItem.title}
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {selectedItem.images.map((image: any, index: any) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{
                    padding: "0.5rem",
                  }}
                >
                  <img
                    src={image}
                    alt={`${selectedItem.title} - Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 12px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px rgba(0, 0, 0, 0.15)";
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="body2"
              sx={{
                margin: "1rem 0",
                lineHeight: "1.5",
                letterSpacing: "1px",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              {selectedItem.description}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                margin: "1rem 0",
                lineHeight: "1.5",
                letterSpacing: "1px",
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "left",
              }}
            >
              <strong>Sub Description:</strong>
              <ul>
                {selectedItem?.subDescription?.length > 0 ? (
                  selectedItem?.subDescription.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                margin: "1rem 0",
                lineHeight: "1.5",
                letterSpacing: "1px",
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "left",
              }}
            >
              <strong>Specification:</strong>
              <ul>
                {selectedItem?.specification?.length > 0 ? (
                  selectedItem?.specification.map((item: any, index: any) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </Typography>

            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModal}
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "0.8rem", md: "1rem" },
                backgroundColor: "rgb(21,80,139)",
                "&:hover": {
                  backgroundColor: "darkred",
                },
                color: "white",
              }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default FeatureGridSlider2;
