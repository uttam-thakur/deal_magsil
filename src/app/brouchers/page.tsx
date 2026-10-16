// "use client";
// import React from "react";
// import Link from "next/link";
// import {
//   Card,
//   CardGroup,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardText,
//   Button,
// } from "reactstrap";
// import Image from "next/image";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import Styles from "./page.module.css";
// import { brochureHeading, brouchersPara } from "../common/constant/brouchers";
// const brochures = [
//   {
//     id: 1,
//     title: "Catalogue",
//     description:
//       "An overview of our offerings products and lookeratives deals.",
//     file: "/brochure/DEALMAGSILCatalogue.pdf",
//     image: "/images/cover/c1.jpg",
//   },
//   {
//     id: 2,
//     title: "Petrolium Sector Brochure",
//     description: "A complete guide to our React-based products and services.",
//     file: "/brochure/Elite Petroleum Sector.pdf",
//     image: "/images/cover/c7.jpg",
//   },
//   {
//     id: 3,
//     title: "All Tiles Brochure",
//     description: "Detailed insights into our design process and services.",
//     file: "https://wa.me/c/919332331442",
//     image: "/images/cover/c8.jpg",
//   },
// ];

// export default function Brochures() {
//   return (
//     <>
//       <div className={Styles.main}>
//         <main style={{ padding: "2rem", marginTop: "50px", zIndex: 1 }}>
//           {/* Header Section */}
//           <header className="text-center mb-12">
//             <h1 className="text-5xl font-extrabold text-blue-900">
//               {brochureHeading}
//             </h1>

//             <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
//               {brouchersPara}
//             </p>
//           </header>

//           {/* Brochure Cards */}
//           <CardGroup className="gap-4 px-6 w-full max-w-4xl">
//             {brochures.map((brochure) => (
//               <Card
//                 key={brochure.id}
//                 className="mb-4 shadow-lg d-flex flex-column"
//                 style={{ borderRadius: "10px", opacity: "0.9" }}
//               >
//                 <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
//                   <CardImg
//                     alt="Card image cap"
//                     src={brochure.image}
//                     top
//                     style={{
//                       height: "200px",
//                       width: "70%",
//                       objectFit: "cover",
//                       padding: "20px",
//                       borderBottomLeftRadius: "15px",
//                       borderBottomRightRadius: "15px",
//                       marginLeft: "15%",
//                     }}
//                   />
//                   <CardBody className="d-flex flex-column justify-content-between">
//                     <CardTitle tag="h5" className="font-bold text-blue-800">
//                       {brochure.title}
//                     </CardTitle>

//                     <CardText style={{ height: "70px" }}>
//                       {brochure.description}
//                     </CardText>
//                     <Link href={brochure.file} target="_blank" download>
//                       <Button
//                         color="transparent"
//                         style={{
//                           border: "1px solid #007bff",
//                           backgroundColor: "transparent",
//                           height: "40px",
//                           borderRadius: "5px",
//                         }}
//                         className="d-flex align-items-center mt-auto mb-3"
//                       >
//                         <PictureAsPdfIcon className="mr-2" />
//                         Download
//                       </Button>
//                     </Link>
//                   </CardBody>
//                 </div>
//               </Card>
//             ))}
//           </CardGroup>
//         </main>
//       </div>
//     </>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PictureAsPdf,
  Download,
  OpenInNew,
  MenuBook,
} from "@mui/icons-material";

import Styles from "./page.module.css";
import {
  brochureHeading,
  brouchersPara,
} from "../common/constant/brouchers";

const brochures = [
  {
    id: 1,
    title: "Deal Magsil Product Catalogue",
    description:
      "Explore our precast concrete products, including paver blocks, tiles, bricks, slabs and other construction solutions.",
    file: "/brochure/DEALMAGSILCatalogue.pdf",
    image: "/images/cover/c1.jpg",
    type: "PDF Catalogue",
    action: "pdf",
  },
  {
    id: 2,
    title: "Petroleum Sector Brochure",
    description:
      "Discover our product and solution information for petroleum-sector projects. Open the brochure for complete details.",
    file: "/brochure/Elite Petroleum Sector.pdf",
    image: "/images/cover/c7.jpg",
    type: "PDF Brochure",
    action: "pdf",
  },
  {
    id: 3,
    title: "Tiles & Product Collection",
    description:
      "Explore our available tile and product collection through our WhatsApp catalogue and enquire about product availability.",
    file: "https://wa.me/c/919332331442",
    image: "/images/cover/c8.jpg",
    type: "Online Catalogue",
    action: "external",
  },
];

export default function Brochures() {
  return (
    <div className={Styles.page}>
      {/* Hero section */}
      <section className={Styles.main}>
        <div className={Styles.heroOverlay} />

        <div className={Styles.heroContent}>
          <span className={Styles.eyebrow}>
            DEAL MAGSIL · PRODUCT RESOURCES
          </span>

          <h1 className={Styles.heroTitle}>
            {brochureHeading || "Our Brochures & Catalogues"}
          </h1>

          <p className={Styles.heroDescription}>
            {brouchersPara ||
              "Explore our product catalogues and brochures to discover our precast concrete solutions, product range and project applications."}
          </p>

          <a href="#brochure-library" className={Styles.heroButton}>
            Explore Brochures
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={Styles.heroBottom}>
          <span>Product Information</span>
          <span className={Styles.heroDot} />
          <span>PDF Downloads</span>
          <span className={Styles.heroDot} />
          <span>Online Catalogue</span>
        </div>
      </section>

      {/* Brochure library */}
      <section
        id="brochure-library"
        className={Styles.library}
        aria-labelledby="library-title"
      >
        <header className={Styles.sectionHeader}>
          <div>
            <span className={Styles.sectionEyebrow}>
              EXPLORE OUR RESOURCES
            </span>

            <h2 id="library-title" className={Styles.sectionTitle}>
              Brochures & Product Catalogues
            </h2>

            <p className={Styles.sectionDescription}>
              Find product information, browse our collections, and
              access the brochure that best suits your requirements.
            </p>
          </div>

          <div className={Styles.resourceCount}>
            <MenuBook aria-hidden="true" />
            <span>
              {brochures.length} Resources
            </span>
          </div>
        </header>

        <div className={Styles.brochureGrid}>
          {brochures.map((brochure) => {
            const isPdf = brochure.action === "pdf";

            return (
              <article
                key={brochure.id}
                className={Styles.card}
              >
                <div className={Styles.imageWrapper}>
                  <Image
                    src={brochure.image}
                    alt={`${brochure.title} cover`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className={Styles.cardImage}
                  />

                  <span className={Styles.typeBadge}>
                    {isPdf ? (
                      <PictureAsPdf aria-hidden="true" />
                    ) : (
                      <MenuBook aria-hidden="true" />
                    )}
                    {brochure.type}
                  </span>
                </div>

                <div className={Styles.cardBody}>
                  <span className={Styles.cardNumber}>
                    RESOURCE {String(brochure.id).padStart(2, "0")}
                  </span>

                  <h3 className={Styles.cardTitle}>
                    {brochure.title}
                  </h3>

                  <p className={Styles.cardDescription}>
                    {brochure.description}
                  </p>

                  <div className={Styles.cardActions}>
                    {isPdf ? (
                      <>
                        <Link
                          href={brochure.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Styles.viewButton}
                        >
                          View Brochure
                          <OpenInNew aria-hidden="true" />
                        </Link>

                        <a
                          href={brochure.file}
                          download
                          className={Styles.downloadButton}
                        >
                          <Download aria-hidden="true" />
                          Download PDF
                        </a>
                      </>
                    ) : (
                      <Link
                        href={brochure.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Styles.viewButton}
                      >
                        Explore Catalogue
                        <OpenInNew aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={Styles.contactBanner}>
          <div className={Styles.contactText}>
            <h3>Need more product information?</h3>
            <p>
              Contact Deal Magsil to enquire about products,
              specifications and project requirements.
            </p>
          </div>

          <Link
            href="https://wa.me/919332331442"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.contactButton}
          >
            Enquire on WhatsApp
            <OpenInNew aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

