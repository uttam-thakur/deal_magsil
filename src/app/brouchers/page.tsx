"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Image from "next/image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Styles from "./page.module.css";
import { brochureHeading, brouchersPara } from "../common/constant/brouchers";
const brochures = [
  {
    id: 1,
    title: "Catalogue",
    description:
      "An overview of our offerings products and lookeratives deals.",
    file: "/brochure/DEALMAGSILCatalogue.pdf",
    image: "/images/cover/c1.jpg",
  },
  {
    id: 2,
    title: "Petrolium Sector Brochure",
    description: "A complete guide to our React-based products and services.",
    file: "/brochure/Elite Petroleum Sector.pdf",
    image: "/images/cover/c7.jpg",
  },
  {
    id: 3,
    title: "All Tiles Brochure",
    description: "Detailed insights into our design process and services.",
    file: "https://wa.me/c/919332331442",
    image: "/images/cover/c8.jpg",
  },
];

export default function Brochures() {
  return (
    <>
      <div className={Styles.main}>
        <main style={{ padding: "2rem", marginTop: "50px", zIndex: 1 }}>
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900">
              {brochureHeading}
            </h1>

            <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
              {brouchersPara}
            </p>
          </header>

          {/* Brochure Cards */}
          <CardGroup className="gap-4 px-6 w-full max-w-4xl">
            {brochures.map((brochure) => (
              <Card
                key={brochure.id}
                className="mb-4 shadow-lg d-flex flex-column"
                style={{ borderRadius: "10px", opacity: "0.9" }}
              >
                <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
                  <CardImg
                    alt="Card image cap"
                    src={brochure.image}
                    top
                    style={{
                      height: "200px",
                      width: "70%",
                      objectFit: "cover",
                      padding: "20px",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      marginLeft: "15%",
                    }}
                  />
                  <CardBody className="d-flex flex-column justify-content-between">
                    <CardTitle tag="h5" className="font-bold text-blue-800">
                      {brochure.title}
                    </CardTitle>

                    <CardText style={{ height: "70px" }}>
                      {brochure.description}
                    </CardText>
                    <Link href={brochure.file} target="_blank" download>
                      <Button
                        color="transparent"
                        style={{
                          border: "1px solid #007bff",
                          backgroundColor: "transparent",
                          height: "40px",
                          borderRadius: "5px",
                        }}
                        className="d-flex align-items-center mt-auto mb-3"
                      >
                        <PictureAsPdfIcon className="mr-2" />
                        Download
                      </Button>
                    </Link>
                  </CardBody>
                </div>
              </Card>
            ))}
          </CardGroup>
        </main>
      </div>
    </>
  );
}
