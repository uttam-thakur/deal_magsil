"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import Modal from "./common-components/Modal";
import styles from "../components/styles/FeatureGridSlider2.module.css";

import { precastItems } from "../products/ProductsConstants";

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};

const FeatureGridSlider2 = () => {
  const [selectedItem, setSelectedItem] = useState<PrecastItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleOpenModal = (item: PrecastItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const filteredItems = precastItems.filter((item) =>
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
        filteredItems.map((item, index) => (
          <div
            className={`${styles.section} ${
              index % 2 === 1 ? styles.reverse : ""
            }`}
            key={index}
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
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              {selectedItem.title}
            </Typography>
            <div>
              {selectedItem.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${selectedItem.title} - Slide ${index + 1}`}
                  width={400}
                  height={300}
                  style={{
                    margin: "0.5rem",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
            <Typography variant="body2" sx={{ margin: "1rem 0" }}>
              {selectedItem.description}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModal}
              sx={{ marginTop: "1rem" }}
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
