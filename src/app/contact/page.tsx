"use client";

import React, { useState } from "react";
import ContactModal from "../components/ContactModal";
import GetInTouchForm from "../components/GetInTouchForm";
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
              ) : contact.contactInfo.includes("@") ? (
                // If the contactInfo is an email, open Gmail compose window
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.contactInfo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.email}>{contact.contactInfo}</p>
                </a>
              ) : (
                // If the contactInfo is a phone number, open the dialer
                <a href={`tel:${contact.contactInfo}`} className={styles.phone}>
                  <p>{contact.contactInfo}</p>
                </a>
              )}
            </div>
          ))}
        </div>

        <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <GetInTouchForm />
    </>
  );
}
