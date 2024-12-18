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
