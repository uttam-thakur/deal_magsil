"use client";
import { useState } from "react";
import Image from "next/image";
import { sendEmail } from "../services/services";
import styles from "./page.module.css";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cv: null as File | any,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        cv: file,
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.cv) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result as string;

        // Prepare the form data
        const emailFormData = {
          name: formData.name,
          phone: formData.phone,
          cv: base64File, // Send the base64 file here
        };

        try {
          // Send the email with the form data
          await sendEmail(emailFormData);
        } catch (err) {
          console.error("Error sending email", err);
        }
      };

      reader.readAsDataURL(formData.cv); // Convert the file to base64
    } else {
      alert("Please upload your CV.");
    }
  };

  return (
    <div className={styles.careersPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image
          src="/images/careers-hero.jpg"
          alt="Careers Hero Image"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1>Join Our Team</h1>
          <p>
            We're looking for passionate and talented individuals to join our
            growing team!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className={styles.formContainer}>
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your Phone Number"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cv">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              //   required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
