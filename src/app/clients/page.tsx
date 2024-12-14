import React from "react";
import styles from "./page.module.css";
import {
  introHeading,
  introSubHeading,
  heading,
  description,
} from "../common/constant/clients";
import Image from "next/image";
const Clients = () => {
  const clients = [
    { name: "GrayGrids", logo: "/images/clients/1.jpg" },
    { name: "UIdeck", logo: "/images/clients/2.jpg" },
    { name: "Ayro UI", logo: "/images/clients/3.jpg" },
    { name: "Lineicons", logo: "/images/clients/4.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/6.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/amc.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/kei.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/l&t.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/l&tpower.webp" },
    { name: "Ecommerce HTML", logo: "/images/clients/lumino.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/NCC.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/RelianceInfra.webp" },
    { name: "Ecommerce HTML", logo: "/images/clients/sail.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/vol.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/WBSEDCL.webp" },
    {
      name: "Ecommerce HTML",
      logo: "/images/clients/National_Highways_Authority_of_India_logo.svg",
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <Image
            alt="bg logo logo"
            src="/images/bg-logo2.png"
            height={200}
            width={550}
            className={styles.imgaeBG}
          />
          <p className={styles.introHeading}>{introHeading}</p>
          <p className={styles.introSubHeading}>{introSubHeading}</p>
        </div>
      </div>{" "}
      <div className={styles.clientsSection}>
        {/* <h5 className={styles.subHeading}>MEET OUR CLIENTS</h5> */}

        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.clientsGrid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <img
                src={client.logo}
                alt={client.name}
                className={styles.clientLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
