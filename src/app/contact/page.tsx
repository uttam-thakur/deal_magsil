"use client";

import React, { useState } from "react";
import FAQ from "../components/FAQ";
import ContactModal from "../components/ContactModal";
import GetInTouchForm from "../components/GetInTouchForm";
import Image from "next/image";
import { infoData, contactData } from "../common/constant";
import { handleLocationClick } from "../components/fabComponents/FABLocation";
import { contactHeaderH1, contactHeaderP } from "../common/constant/contact ";
import styles from "./contact.module.css";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.info}>
          <Image
            alt="bg logo logo"
            src="/images/bg-logo2.png"
            height={200}
            width={550}
            className={styles.imgaeBG}
          />
          <div className={styles.title}>{infoData.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{infoData.subTitle}</div>
            <div className={styles.description}>{infoData.description}</div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1>{contactHeaderH1}</h1>
          <p>{contactHeaderP}</p>
        </div>

        <div className={styles.grid}>
          {contactData.map((contact, index) => (
            <div key={index} className={styles.card}>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              {contact.isButton ? (
                <button className={styles.button} onClick={handleLocationClick}>
                  {contact.contactInfo}
                </button>
              ) : (
                <p className={styles.email}>{contact.contactInfo}</p>
              )}
            </div>
          ))}
        </div>

        <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <GetInTouchForm />
      {/* <FAQ /> */}
    </>
  );
}
