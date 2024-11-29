// "use client";

// import { useState } from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import cx from "classnames";

// import Client from "../components/Clients";
// import ProjectSlider from "../components/common-components/ProjectSlider";
// import ProjectsViewer from "../components/common-components/ProjectViewer";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./page.css";
// import styles from "./styles.module.css";
// import { projects } from "./projectsConstants";

// const ProjectsPage = () => {
//   const [showProjectView, setShowProjectView] = useState(false);
//   const [selectedProject, setSelectedProject]: any = useState({});

//   const onProjectClick = (projectData: any) => {
//     setSelectedProject(projectData);
//     setShowProjectView(true);
//   };

//   const onProjectImageViewClose = () => {
//     setSelectedProject({});
//     setShowProjectView(false);
//   };

//   return (
//     <>
//       <div className={styles.mainSection}>
//         <div className={styles.introContainer}>
//           <p className={styles.introHeading}>
//             We take immense pride in contributing to transformative projects
//             that redefine possibilities and shape a brighter future.
//           </p>
//           <p className={styles.introSubHeading}>
//             With over 33 years of trusted expertise, we are dedicated to
//             offering innovative solutions tailored to your needs. Let us help
//             you create spaces that inspire, with products that stand the test of
//             time.
//           </p>
//           <div className={styles.ctaContainer}>
//             <p>Your satisfaction is our priority—visit us today!</p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.projectSection}>
//         <div className={styles.projectGreeting}>
//           <h1 className={styles.projectHeading}>Building the Future</h1>
//           <h3 className={styles.projectDescription}>
//             At Deal Magsil, we take pride in being a trusted supplier of
//             high-quality products, including pavement bricks, dustbins, and a
//             variety of brick types. Our materials have played a key role in
//             numerous infrastructure developments, including prestigious
//             government projects.
//           </h3>
//         </div>

//         <Swiper
//           navigation
//           modules={[Pagination]}
//           slidesPerView="auto"
//           className={cx(styles.projectSlider, "projects-swiper-outer")}
//           pagination={{ clickable: true }}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className={styles.swiperSlide}>
//               <ProjectSlider
//                 images={project.images}
//                 name={project.name}
//                 title={project?.title}
//                 products={project?.products}
//                 onClick={onProjectClick}
//               />
//               <br></br>

//               <ProjectSlider
//                 images={project.images}
//                 name={project.name}
//                 title={project?.title}
//                 products={project?.products}
//                 onClick={onProjectClick}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <ProjectsViewer
//         onClose={onProjectImageViewClose}
//         images={selectedProject?.images}
//         showProjectView={showProjectView}
//       />

//       <Client />
//     </>
//   );
// };

// export default ProjectsPage;

// section wise UI
// "use client";

// import { useState } from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import cx from "classnames";

// import Client from "../components/Clients";
// import ProjectSlider from "../components/common-components/ProjectSlider";
// import ProjectsViewer from "../components/common-components/ProjectViewer";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./page.css";
// import styles from "./styles.module.css";
// import { projects } from "./projectsConstants";

// const ProjectsPage = () => {
//   const [showProjectView, setShowProjectView] = useState(false);
//   const [selectedProject, setSelectedProject]: any = useState({});

//   // Filter projects based on criteria
//   const petroleumProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes("petroleum") ||
//       project.name.toLowerCase().includes("oil")
//   );

//   const corporationProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes("corporation") &&
//       !project.name.toLowerCase().includes("oil")
//   );

//   const onProjectClick = (projectData: any) => {
//     setSelectedProject(projectData);
//     setShowProjectView(true);
//   };

//   const onProjectImageViewClose = () => {
//     setSelectedProject({});
//     setShowProjectView(false);
//   };

//   return (
//     <>
//       <div className={styles.mainSection}>
//         <div className={styles.introContainer}>
//           <p className={styles.introHeading}>
//             We take immense pride in contributing to transformative projects
//             that redefine possibilities and shape a brighter future.
//           </p>
//           <p className={styles.introSubHeading}>
//             With over 33 years of trusted expertise, we are dedicated to
//             offering innovative solutions tailored to your needs. Let us help
//             you create spaces that inspire, with products that stand the test of
//             time.
//           </p>
//           <div className={styles.ctaContainer}>
//             <p>Your satisfaction is our priority—visit us today!</p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.projectSection}>
//         <div className={styles.projectGreeting}>
//           <h1 className={styles.projectHeading}>Building the Future</h1>
//           <h3 className={styles.projectDescription}>
//             At Deal Magsil, we take pride in being a trusted supplier of
//             high-quality products, including pavement bricks, dustbins, and a
//             variety of brick types. Our materials have played a key role in
//             numerous infrastructure developments, including prestigious
//             government projects.
//           </h3>
//         </div>

//         <h2>Petroleum/Oil Projects</h2>
//         <Swiper
//           navigation
//           modules={[Pagination]}
//           slidesPerView="auto"
//           className={cx(styles.projectSlider, "projects-swiper-outer")}
//           pagination={{ clickable: true }}
//         >
//           {petroleumProjects.map((project, index) => (
//             <SwiperSlide key={index} className={styles.swiperSlide}>
//               <ProjectSlider
//                 images={project.images}
//                 name={project.name}
//                 title={project?.title}
//                 products={project?.products}
//                 onClick={onProjectClick}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <h2>Corporation Projects</h2>
//         <Swiper
//           navigation
//           modules={[Pagination]}
//           slidesPerView="auto"
//           className={cx(styles.projectSlider, "projects-swiper-outer")}
//           pagination={{ clickable: true }}
//         >
//           {corporationProjects.map((project, index) => (
//             <SwiperSlide key={index} className={styles.swiperSlide}>
//               <ProjectSlider
//                 images={project.images}
//                 name={project.name}
//                 title={project?.title}
//                 products={project?.products}
//                 onClick={onProjectClick}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <ProjectsViewer
//         onClose={onProjectImageViewClose}
//         images={selectedProject?.images}
//         showProjectView={showProjectView}
//       />

//       <Client />
//     </>
//   );
// };

// export default ProjectsPage;

"use client";

import { useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

  // Extract unique keywords
  // const uniqueKeywords = [
  //   ...new Set(projects.map((project) => project.keyword)),
  // ];

  // Extract unique keywords
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
          <p className={styles.introHeading}>
            We take immense pride in contributing to transformative projects
            that redefine possibilities and shape a brighter future.
          </p>
          <p className={styles.introSubHeading}>
            With over 33 years of trusted expertise, we are dedicated to
            offering innovative solutions tailored to your needs. Let us help
            you create spaces that inspire, with products that stand the test of
            time.
          </p>
          <div className={styles.ctaContainer}>
            <p>Your satisfaction is our priority—visit us today!</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectSection}>
        <div className={styles.projectGreeting}>
          <h1 className={styles.projectHeading}>Building the Future</h1>
          <h3 className={styles.projectDescription}>
            At Deal Magsil, we take pride in being a trusted supplier of
            high-quality products, including pavement bricks, dustbins, and a
            variety of brick types. Our materials have played a key role in
            numerous infrastructure developments, including prestigious
            government projects.
          </h3>
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
