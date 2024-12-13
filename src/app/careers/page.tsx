// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { sendEmail } from "../services/services";
// import styles from "./page.module.css";

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     cv: null as File | any,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setFormData((prevState) => ({
//         ...prevState,
//         cv: file,
//       }));
//     }
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.cv) {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64File = reader.result as string;

//         // Prepare the form data
//         const emailFormData = {
//           name: formData.name,
//           phone: formData.phone,
//           cv: base64File, // Send the base64 file here
//         };

//         try {
//           // Send the email with the form data
//           await sendEmail(emailFormData);
//         } catch (err) {
//           console.error("Error sending email", err);
//         }
//       };

//       reader.readAsDataURL(formData.cv); // Convert the file to base64
//     } else {
//       alert("Please upload your CV.");
//     }
//   };

//   return (
//     <div className={styles.careersPage}>
//       {/* Hero Section */}
//       <div className={styles.heroSection}>
//         <Image
//           src="/images/careers-hero.jpg"
//           alt="Careers Hero Image"
//           layout="fill"
//           objectFit="cover"
//           className={styles.heroImage}
//         />
//         <div className={styles.heroContent}>
//           <h1>Join Our Team</h1>
//           <p>
//             We're looking for passionate and talented individuals to join our
//             growing team!
//           </p>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className={styles.formContainer}>
//         <h2>Apply Now</h2>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Your Phone Number"
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="cv">Upload CV</label>
//             <input
//               type="file"
//               id="cv"
//               name="cv"
//               onChange={handleFileChange}
//               accept=".pdf,.doc,.docx"
//               //   required
//             />
//           </div>

//           <button type="submit" className={styles.submitButton}>
//             Submit Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Careers;

// "use client";
// import React from "react";
// import styles from "./page.module.css";

// const Careers: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.grid}></div>

//       {/* Content section */}
//       <div className={styles.content}>
//         {/* Rotating logo */}
//         <div className={styles.logoWrapper}>
//           <img
//             src="/images/careersLogo.webp"
//             alt="Fake Rotating Logo"
//             className={styles.logo}
//           />
//         </div>

//         {/* Page title */}
//         <h1 className={styles.title}>Careers</h1>

//         {/* Description text */}
//         <p className={styles.description}>
//           At our company, we value innovation, teamwork, and growth. Joining our
//           team means working on exciting projects, collaborating with talented
//           individuals, and making an impact in the industry.
//           <br />
//           Be part of something great and grow your career with us!{" "}
//         </p>

//         <button className={styles.button}>See open roles</button>
//         {/* New section below the button */}
//         <p className={styles.contactInfo}>
//           Drop us your CV at{" "}
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=uttamthakur2016@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             uttamthakur2016@gmail.com
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Careers;

"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Careers: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    {
      title: "Software Developer",
      details: {
        experience: "2-4 years",
        qualification: "Bachelor's degree in Computer Science or equivalent",
        mustKnown: "React, Node.js, REST APIs",
        languages: "JavaScript, TypeScript",
        shift: "9 AM - 6 PM",
      },
    },
    {
      title: "Junior Software Developer",
      details: {
        experience: "0-2 years",
        qualification: "Bachelor's degree in Computer Science or equivalent",
        mustKnown: "HTML, CSS, JavaScript",
        languages: "JavaScript, Python",
        shift: "10 AM - 7 PM",
      },
    },
    {
      title: "EIC (Engineer in Charge)",
      details: {
        experience: "5+ years",
        qualification: "Master's degree in Engineering or equivalent",
        mustKnown: "Project Management, Technical Leadership",
        languages: "English, Hindi",
        shift: "10 AM - 7 PM",
      },
    },
  ];

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setIsOpen(!isOpen);
  };

  const openModal = (role: string) => {
    setSelectedRole(role);
  };

  const closeModal = () => {
    setSelectedRole(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}></div>

      {/* Content section */}
      <div className={styles.content}>
        {/* Rotating logo */}
        <div className={styles.logoWrapper}>
          <img
            src="/images/careersLogo.webp"
            alt="Fake Rotating Logo"
            className={styles.logo}
          />
        </div>

        {/* Page title */}
        <h1 className={styles.title}>Careers</h1>

        {/* Description text */}
        <p className={styles.description}>
          At our company, we value innovation, teamwork, and growth. Joining our
          team means working on exciting projects, collaborating with talented
          individuals, and making an impact in the industry.
          <br />
          Be part of something great and grow your career with us!{" "}
        </p>

        {/* <button className={styles.button} onClick={toggleAccordion}>
          See open roles
        </button> */}

        <button className={styles.button} onClick={toggleAccordion}>
          See open roles {isOpen ? "▲" : "▼"}
        </button>

        {/* Accordion */}
        {isAccordionOpen && (
          <div className={styles.accordion}>
            {roles.map((role, index) => (
              <div
                key={index}
                className={styles.roleItem}
                onClick={() => openModal(role.title)}
              >
                {role.title}
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedRole && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>{selectedRole}</h2>
              {roles.find((role) => role.title === selectedRole)?.details && (
                <ul>
                  <li>
                    <strong>Experience:</strong>{" "}
                    {
                      roles.find((role) => role.title === selectedRole)?.details
                        .experience
                    }
                  </li>
                  <li>
                    <strong>Qualification:</strong>{" "}
                    {
                      roles.find((role) => role.title === selectedRole)?.details
                        .qualification
                    }
                  </li>
                  <li>
                    <strong>Must Known:</strong>{" "}
                    {
                      roles.find((role) => role.title === selectedRole)?.details
                        .mustKnown
                    }
                  </li>
                  <li>
                    <strong>Languages Known:</strong>{" "}
                    {
                      roles.find((role) => role.title === selectedRole)?.details
                        .languages
                    }
                  </li>
                  <li>
                    <strong>Shift:</strong>{" "}
                    {
                      roles.find((role) => role.title === selectedRole)?.details
                        .shift
                    }
                  </li>
                </ul>
              )}
              <button onClick={closeModal} className={styles.btn}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Contact info */}
        <p className={styles.contactInfo}>
          Drop us your CV at{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=uttamthakur2016@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            uttamthakur2016@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Careers;
