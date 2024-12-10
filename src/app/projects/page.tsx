"use client";

import { useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  introHeading,
  introSubHeading,
  ctaContainer,
  projectDescription,
  projectHeading,
} from "../common/constant/projects";
import cx from "classnames";

import Client from "../components/Clients";
import ProjectSlider from "../components/common-components/ProjectSlider";
import ProjectsViewer from "../components/common-components/ProjectViewer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./page.css";
import styles from "./styles.module.css";
import { projects } from "./projectsConstants";

const ProjectsPage = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject]: any = useState({});

  const onProjectClick = (projectData: any) => {
    setSelectedProject(projectData);
    setShowProjectView(true);
  };

  const onProjectImageViewClose = () => {
    setSelectedProject({});
    setShowProjectView(false);
  };

  const uniqueKeywords = Array.from(
    new Set(projects.map((project) => project.keyword))
  );

  // Group projects by keyword
  const groupedProjects = uniqueKeywords.map((keyword) => ({
    keyword,
    projects: projects.filter((project) => project.keyword === keyword),
  }));

  return (
    <>
      {/* Intro Section */}
      <div className={styles.mainSection}>
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
          <div className={styles.ctaContainer}>
            <p>{ctaContainer}</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectSection}>
        <div className={styles.projectGreeting}>
          <h1 className={styles.projectHeading}>{projectHeading}</h1>
          <h3 className={styles.projectDescription}>{projectDescription}</h3>
        </div>

        {/* Dynamically Render Sections Based on Keywords */}
        {groupedProjects.map((group, index) => (
          <div key={index} className={styles.departmentSection}>
            <h2 className={styles.departmentHeading}>
              {group.keyword} Projects
            </h2>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              slidesPerView="auto"
              spaceBetween={30}
              className={cx(styles.projectSlider, "projects-swiper-outer")}
            >
              {group.projects.map((project, projIndex) => (
                <SwiperSlide key={projIndex} className={styles.swiperSlide}>
                  <ProjectSlider
                    images={project.images}
                    name={project.name}
                    title={project.title}
                    keyword={project.keyword}
                    products={project.products}
                    onClick={() => onProjectClick(project)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      {/* Project Viewer Modal */}
      <ProjectsViewer
        onClose={onProjectImageViewClose}
        images={selectedProject?.images}
        showProjectView={showProjectView}
      />

      {/* Clients Section */}
      <Client />
    </>
  );
};

export default ProjectsPage;
