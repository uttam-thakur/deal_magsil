"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Typography, Button, CardMedia, Grid } from "@mui/material";
import Modal from "./common-components/Modal";
import styles from "../../app/products/page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { precastItems } from "../products/ProductsConstants";
type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};

const NextArrow = ({ onClick }: any) => (
  <ArrowForwardIosIcon
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#000",
      zIndex: 2,
    }}
  />
);

const PrevArrow = ({ onClick }: any) => (
  <ArrowBackIosIcon
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#000",
      zIndex: 2,
    }}
  />
);

const FeatureGridSlider = () => {
  const [selectedItem, setSelectedItem] = useState<PrecastItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Handles input changes for search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleOpenModal = (item: PrecastItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Filter precastItems based on the search term
  const filteredItems = precastItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      {/* Search Bar Section */}

      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchbar}
        />
      </div>

      <div>
        <Box sx={{ padding: { xs: "8px", md: "16px" } }}>
          <Grid container spacing={2}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "center", md: "flex-start" },
                      justifyContent: "space-between",
                      padding: "1rem",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {/* Image Slider */}
                    <Box
                      sx={{
                        flex: 1,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: { xs: "1rem", md: "0" },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: { xs: "250px", md: "300px" },
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <Slider {...settings}>
                          {item.images.map((image, imgIndex) => (
                            <Box
                              key={imgIndex}
                              sx={{
                                position: "relative",
                                height: { xs: "150px", md: "200px" },
                                overflow: "hidden",
                                borderRadius: "8px",
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={image}
                                alt={`Slide ${imgIndex} for ${item.title}`}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                          ))}
                        </Slider>
                      </Box>
                    </Box>

                    {/* Text Section */}
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: "0.5rem",
                          fontWeight: "700",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          marginBottom: "1rem",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, // Limit to two lines
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description.substring(0, 120)}...
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => handleOpenModal(item)}
                        sx={{
                          backgroundColor: "rgb(24, 92, 160)",
                          "&:hover": {
                            backgroundColor: "darkred",
                          },
                          color: "white",
                          width: { xs: "100%", md: "40%" },
                        }}
                      >
                        READ MORE
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "gray",
                  padding: { xs: "0 1rem", md: "0" },
                  marginLeft: { xs: "2.5rem" },
                }}
              >
                <Image
                  alt="no image found"
                  src="/images/noProductFound.png"
                  height={200}
                  width={300}
                  style={{ marginBottom: "1rem" }}
                />
                <Typography variant="body1">
                  No products found matching "{searchTerm}".
                </Typography>
              </Box>
            )}
          </Grid>
        </Box>

        {/* Modal Section */}
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
                {selectedItem.images.map((image, index) => (
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
    </>
  );
};

export default FeatureGridSlider;
