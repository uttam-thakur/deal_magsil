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

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};

const precastItems: PrecastItem[] = [
  {
    //tiles
    images: [
      "/images/tiles/Dotted/1.jpg",
      "/images/tiles/Dotted/2.webp",
      "/images/tiles/Dotted/3.jpg",
      "/images/tiles/Dotted/4.jpg",
    ],
    title: "DOTTED",
    description:
      "A versatile, dotted pattern tile ideal for adding subtle texture and depth to any space.",
  },
  {
    images: [
      "/images/tiles/Barfi/1.jpg",
      "/images/tiles/Barfi/2.webp",
      "/images/tiles/Barfi/3.jpg",
      "/images/tiles/Barfi/4.jpg",
    ],
    title: "BARFI",
    description:
      "Inspired by classic Barfi shapes, this tile brings a unique charm with its geometric elegance.",
  },
  {
    images: [
      "/images/tiles/QuarterCircle/1.jpg",
      "/images/tiles/QuarterCircle/2.webp",
      "/images/tiles/QuarterCircle/3.jpg",
      "/images/tiles/QuarterCircle/4.jpg",
      "/images/tiles/QuarterCircle/5.jpg",
    ],
    title: "QUARTER CIRCLE",
    description:
      "Features a unique quarter-circle design, perfect for creating dynamic patterns in floors or walls.",
  },
  {
    images: [
      "/images/tiles/Chequered/1.jpg",
      "/images/tiles/Chequered/2.webp",
      "/images/tiles/Chequered/3.jpg",
      "/images/tiles/Chequered/4.jpg",
      "/images/tiles/Chequered/5.jpg",
    ],
    title: "CHEQUERED",
    description:
      "A classic chequered pattern that brings a bold, timeless style to interiors and exteriors.",
  },

  {
    images: [
      "/images/tiles/Cadburry/2.jpg",
      "/images/tiles/Cadburry/1.jpg",
      "/images/tiles/Cadburry/3.jpg",
      "/images/tiles/Cadburry/4.jpg",
      "/images/tiles/Cadburry/5.jpg",
      "/images/tiles/Cadburry/6.jpg",
    ],
    title: "CADBURRY",
    description:
      "Rich and smooth, the Cadbury tile adds an elegant, luxurious feel to any surface.",
  },
  {
    images: [
      "/images/tiles/RoofTile/1.txt",
      "/images/tiles/RoofTile/2.txt",
      "/images/tiles/RoofTile/3.txt",
      "/images/tiles/RoofTile/4.txt",
      "/images/tiles/RoofTile/5.jpg",
    ],
    title: "ROOF TILE",
    description:
      "Durable and weather-resistant, this tile is ideal for roofing with a stylish, traditional look.",
  },
  {
    images: [
      "/images/tiles/B&W  Checker/1.jpg",
      "/images/tiles/B&W  Checker/2.webp",
      "/images/tiles/B&W  Checker/3.jpg",
      "/images/tiles/B&W  Checker/4.jpg",
      "/images/tiles/B&W  Checker/5.webp",
    ],
    title: "BLACK AND WHITE CHECKER",
    description:
      "A bold black-and-white checker pattern that enhances spaces with a striking, modern appeal.",
  },
  {
    images: [
      "/images/tiles/LShapedSandBlast/1.jpg",
      "/images/tiles/LShapedSandBlast/2.jpg",
      "/images/tiles/LShapedSandBlast/3.jpg",
      "/images/tiles/LShapedSandBlast/4.jpg",
      "/images/tiles/LShapedSandBlast/5.txt",
      "/images/tiles/LShapedSandBlast/6.txt",
      "/images/tiles/LShapedSandBlast/7.txt",
      "/images/tiles/LShapedSandBlast/8.txt",
    ],
    title: "L-SHAPED SAND BLAST",
    description:
      "The L-shaped design with a sandblast finish adds texture and modernity to any project.",
  },
  {
    images: [
      "/images/tiles/TRIHEX/1.jpg",
      "/images/tiles/TRIHEX/2.txt",
      "/images/tiles/TRIHEX/3.txt",
      "/images/tiles/TRIHEX/4.txt",
      "/images/tiles/TRIHEX/5.txt",
      "/images/tiles/TRIHEX/6.txt",
      "/images/tiles/TRIHEX/7.txt",
    ],
    title: "TRI - HEX",
    description:
      "Combines triangular and hexagonal shapes, perfect for creating eye-catching, intricate patterns.",
  },
  {
    images: [
      "/images/tiles/ZigZagUniPaver/1.txt",
      "/images/tiles/ZigZagUniPaver/2.txt",
      "/images/tiles/ZigZagUniPaver/3.txt",
      "/images/tiles/ZigZagUniPaver/4.txt",
      "/images/tiles/ZigZagUniPaver/5.txt",
      "/images/tiles/ZigZagUniPaver/6.txt",
      "/images/tiles/ZigZagUniPaver/7.jpg",
      "/images/tiles/ZigZagUniPaver/8.jpg",
      "/images/tiles/ZigZagUniPaver/9.jpg",
    ],
    title: "ZIG - ZAG INTERLOCKING PAVER",
    description:
      "A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.",
  },
  {
    images: [
      "/images/tiles/Milano/1.jpg",
      "/images/tiles/Milano/2.jpg",
      "/images/tiles/Milano/3.jpg",
      "/images/tiles/Milano/4.jpg",
      "/images/tiles/Milano/5.jpg",
      "/images/tiles/Milano/6.txt",
      "/images/tiles/Milano/7.txt",
      "/images/tiles/Milano/8.txt",
      "/images/tiles/Milano/9.txt",
    ],
    title: "MILANO",
    description:
      "Elegant and smooth, Milano tiles are designed to bring Italian charm and sophistication to any surface.",
  },
  {
    images: [
      "/images/tiles/SquaredStoneFinish/1.jpg",
      "/images/tiles/SquaredStoneFinish/2.webp",
      "/images/tiles/SquaredStoneFinish/3.jpg",
      "/images/tiles/SquaredStoneFinish/4.jpg",
      "/images/tiles/SquaredStoneFinish/5.jpg",
    ],
    title: "SQUARED SHAPED STONE FINISH",
    description:
      "Features a natural stone finish that adds earthy tones and texture to floors or walls.",
  },

  {
    images: [
      "/images/tiles/BrickShaped/1.txt",
      "/images/tiles/BrickShaped/2.txt",
      "/images/tiles/BrickShaped/3.txt",
      "/images/tiles/BrickShaped/4.txt",
      "/images/tiles/BrickShaped/5.txt",
      "/images/tiles/BrickShaped/6.txt",
      "/images/tiles/BrickShaped/7.txt",
      "/images/tiles/BrickShaped/8.txt",
      "/images/tiles/BrickShaped/9.txt",
      "/images/tiles/BrickShaped/10.txt",
    ],
    title: "BRICK SHAPED",
    description:
      "A classic brick shape that offers a rustic, timeless appeal for both indoor and outdoor spaces.",
  },
  //precast items
  {
    images: [
      "/images/products/Precast Slabs/1.jpg",
      "/images/products/Precast Slabs/2.jpg",
      "/images/products/Precast Slabs/3.jpg",
      "/images/products/Precast Slabs/4.jpg",
      "/images/products/Precast Slabs/5.jpg",
      "/images/products/Precast Slabs/6.jpg",
      "/images/products/Precast Slabs/7.jpg",
      "/images/products/Precast Slabs/8.webp",
    ],
    title: "Precast Slabs",
    description:
      "Reinforced Cement Concrete / Plain Cement Concrete. We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs. These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.",
  },
  {
    images: [
      "/images/products/Fencing Poles/1.jpg",
      "/images/products/Fencing Poles/2.jpg",
      "/images/products/Fencing Poles/3.jpg",
      "/images/products/Fencing Poles/4.jpg",
      "/images/products/Fencing Poles/5.jpg",
      "/images/products/Fencing Poles/6.jpg",
      "/images/products/Fencing Poles/7.jpg",
    ],
    title: "Fencing Pillar Post",
    description:
      "Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts. Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths. Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices",
  },
  {
    images: [
      "/images/products/Precast Boundary Walls/1.jpg",
      "/images/products/Precast Boundary Walls/2.jpg",
      "/images/products/Precast Boundary Walls/3.jpg",
      "/images/products/Precast Boundary Walls/4.jpg",
      "/images/products/Precast Boundary Walls/5.webp",
      "/images/products/Precast Boundary Walls/6.webp",
    ],
    title: "Boundary wall",
    description:
      "Our product range includes a wide range of Boundary Walls such as Concrete Boundary Walls, Industrial Boundary Walls, Precast RCC Wall Panels, Precast RCC Columns/ Struts/ Posts and many more items.Our offered walls are manufactured from optimum quality materials and advanced technology at our sound manufacturing premises in adherence to the defined industry standards.We have performed strict quality inspection regarding strength and quality of the walls. Thereby, these are widely preferred and appreciated among our clients. In order to meet clients’ specific demands, our entire range is available in various standard length options such as 1800mm , 2100mm , 2400mm and also can be customerized according to client's requirements",
  },

  {
    images: [
      "/images/products/precast cable cover/1.jpeg",
      "/images/products/precast cable cover/2.webp",
      "/images/products/precast cable cover/3.jfif",
      "/images/products/precast cable cover/4.webp",
      "/images/products/precast cable cover/5.jpeg",
    ],
    title: "Cable Cover /Tiles",
    description:
      "Concrete Cable Protection Cover Tiles, also known as Cable Route Markers, are used frequently by utility companies to provide a clear indication to site staff who may be working close to underground electrical cables.The cables and wires are generally used in mechanical lines. These RCC / PCC Cover Slabs are constructed, keeping in view its quality construction. We have been catering to the bulk requirements to attain the satisfaction level of our customer. Moreover, our offered price range has helped in earning the trust of our customers.On request, bespoke covers can be manufactured to order for other services such as Telephone, Gas, Oil, Chemicals, Fibre Optics, etc.",
  },
  {
    images: [
      "/images/products/Precast Drains/1.jpg",
      "/images/products/Precast Drains/2.webp",
      "/images/products/Precast Drains/3.jpg",
      "/images/products/Precast Drains/4.webp",
      "/images/products/Precast Drains/5.jpg",
      "/images/products/Precast Drains/6.jpg",
    ],
    title: "Precast RCC Drains",
    description:
      "We are one of the topmost manufacturers and supplier of a wide range of Precast R.C.C. Drains in our domain.  These drains have holes and permit the collected water to get discharges into another drainage system. Designed by experienced and knowledgeable professionals, these drains exhibit optimum operational features.Precast U / V- Shaped Drains of various sizes for drainage of water along road sides, and in commercial, residential, and industrial areas. These products are made available to the customers in varied specifications, in order to meet their diverse requirements effectively.We are offering a wide range of Precast Concrete Box Culverts provide high flow capacity even where there is low gradient or headroom is not allowed. Our range of precast concrete box culverts are highly durable and can be easily installed on the site. Each Box Culverts are individually designed so as to cater to a varied external loading conditions.We accept Order of Precast Drains only in Bulk /Huge Quantities.",
  },

  {
    images: [
      "/images/products/Kerbstones/1.jpg",
      "/images/products/Kerbstones/2.jpg",
      "/images/products/Kerbstones/3.jpg",
      "/images/products/Kerbstones/4.jpg",
      "/images/products/Kerbstones/5.jpg",
      "/images/products/Kerbstones/6.jpg",
      "/images/products/Kerbstones/7.jpg",
      "/images/products/Kerbstones/8.jpg",
      "/images/products/Kerbstones/9.jpg",
    ],
    title: "Precast Kerb Stone",
    description:
      "We are a prominent manufacturer & supplier of huge assortment of Kerbstone, Precast Concrete Kerb Stones, Curbstone; that are widely used in construction sector and available in various sizes and shapes.We are concerned in offering an adequate range of Kerb Stones which have Cutting - Edge Or Champhered Edge Finish as per client's requirements. These are manufactured using the quality raw material and are widely used in the construction industries using Vibration or Hydraullic Manufacturing Process.Various tests are done by our quality controllers in order to achieve prevailing industrial standards. Apart from these, we offer these ranges to the clients at market-leading prices with Durability & Dimensions & Designs.",
  },
  {
    images: [
      "/images/products/Precast garbag bin/1.jpg",
      "/images/products/Precast garbag bin/2.jfif",
      "/images/products/Precast garbag bin/3.jfif",
      "/images/products/Precast garbag bin/4.jpg",
    ],
    title: "Precast Garbage Bin",
    description:
      "We Manufacture and Supply a range of RCC Garbage Bins to best of its quality.The RCC Garbage Bins conform to the standards and are made available in a variety of classes and sizes according to local Municipal Corporations.Known for their superior strength and resistance to damage, the Reinforced Cement Concrete Garbage Bins are made available at reasonable rates for the clients.The Garbage bins are heavy enough so that it will not be moved around or stolen. They are not easy to turn over. The Bins are suitable for large standard size plastic refuse bags that fold over the top for good hygiene and easy service which are generally preferred in Municipal Cleaning.",
  },
  {
    images: [
      "/images/products/Precast Water Tank/1.jpg",
      "/images/products/Precast Water Tank/2.webp",
      "/images/products/Precast Water Tank/3.jpg",
    ],
    title: "Precast Water Tank",
    description:
      "​We are a progressive company based on Asansol with the mission of becoming the premier Precast Concrete Water Tank and Precast Septic Tank manufacturers in Burdwan District.We pride ourselves on manufacturing high quality concrete water tanks and providing the best professional service.We manufacture a diverse range of Precast Overhead Water Tank supplied to a wide cliental base that includes local governments, civil & mining contractors, project builders, plumbing and landscaping specialists across the domain on a bulk quantity only.Quality, pricing and availability of various sizes of the range of Precast Water Storage Tanks has positioned us a pioneer supplier of these products in our area.",
  },
  {
    images: [
      "/images/products/Precast Concrete Block/1.jpg",
      "/images/products/Precast Concrete Block/2.webp",
      "/images/products/Precast Concrete Block/3.webp",
      "/images/products/Precast Concrete Block/4.jfif",
      "/images/products/Precast Concrete Block/5.jpg",
      "/images/products/Precast Concrete Block/6.jpg",
    ],
    title: "Precast Concrete Block",
    description:
      "We are one of the leading manufacturers of Concrete Blocks and hence widely appreciated in the entire domestic market for the fine quality of our products.These concrete blocks are sturdy in build and are extremely appreciated in the markets due to their environment friendly nature and manufactured from natural raw materials.These are not only resistant to fire but do not emit any toxic gas when exposed to fire. Available in even sizes these help in creating even and polished walls with minimum plastering.Our Concrete Blocks are well-known for features like fascinating designs, durable finish standards, sturdiness and easy installation.",
  },

  {
    images: [
      "/images/products/Precast Cement Products/1.avif",
      "/images/products/Precast Cement Products/2.jpg",
      "/images/products/Precast Cement Products/3.avif",
      "/images/products/Precast Cement Products/4.jpg",
      "/images/products/Precast Cement Products/5.webp",
      "/images/products/Precast Cement Products/6.webp",
    ],
    title: "Precast Cement Products",
    description:
      "We are a leading supplier and processor of all allied precast concrete products no matter how bulk the quantity is.You provide us your requirement in precasting and we will deliver you our best solution and service.We produce Precast Concrete Products From 50 lbs to 10 tons, no matter what shape or size we meet the commitments.(But we entertain requirements of special designed Precast Products only in Bulk / Huge Quantities requirement.All our products are processed from high quality raw materials which make the construction of various products durable, structurally sound, versatile and economic as compared to Cast-In-Situ Procedure. ​Honesty, impeccable quality, on time delivery, affordable pricing and customer satisfaction has helped us maintain a close association with our clients.",
  },
  //new Products
  {
    images: [
      "/images/products/Newly Launch Product/1.jfif",
      "/images/products/Newly Launch Product/2.jfif",
      "/images/products/Newly Launch Product/3.jfif",
    ],
    title: "CELLULAR LIGHT WEIGHT CONCRETE BLOCKS",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast Door Frame.webp",
      "/images/products/Newly Launch Product/precast-door-frame.avif",
      "/images/products/Newly Launch Product/images.jfif",
    ],
    title: "CEMENT DOOR WINDOW FRAME",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
  },

  {
    images: [
      "/images/products/Newly Launch Product/cement bench.avif",
      "/images/products/Newly Launch Product/cement bench1.jfif",
      "/images/products/Newly Launch Product/cement bench2.jpg",
    ],
    title: "CEMENT Bench For OutDoor",
    description: "Bench",
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast beam and coloumn.jfif",
      "/images/products/Newly Launch Product/precast wall pannels.jfif",
      "/images/products/Newly Launch Product/stairs.jfif",
      "/images/products/Newly Launch Product/precast housing unit.jpg",
    ],
    title: "Beam & columns / Wall Panels / Stairs / Structural Slab",
    description: "Beam & columns / Wall Panels / Stairs / Structural Slab",
  },
  {
    images: [
      "/images/products/Cement/1.jpg",
      "/images/products/Cement/2.jpg",

      "/images/products/Cement/3.jpg",
      "/images/products/Cement/4.jpg",
      "/images/products/Cement/5.jpg",
      "/images/products/Cement/6.jpg",
    ],
    title: "Cement ",
    description:
      "For any Cement (Trade Materials) PPC / PSC Enquiry of Requirement You can contact us for Bulk Quantity. We can Provide You the following Brands (Trade Material) depending on their Availability",
  },
];

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
                      flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
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
                        marginBottom: { xs: "1rem", md: "0" }, // Add spacing on small screens
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: { xs: "250px", md: "300px" }, // Adjust size for smaller screens
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
                                height: { xs: "150px", md: "200px" }, // Adjust height for mobile
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
                        textAlign: { xs: "center", md: "left" }, // Center text for small screens
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
                          width: { xs: "100%", md: "40%" }, // Full width for small screens
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
                }}
              >
                <Image
                  alt="no image found"
                  src="/images/noProductFound.png"
                  height={200}
                  width={300} // Adjust image size for smaller screens
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
