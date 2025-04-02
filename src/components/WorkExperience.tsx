import React from "react";
import Timeline from "./Timeline";
// import { RiGraduationCapLine } from "react-icons/ri";

const WorkExperience = () => {
  return (
    <div className="relative w-full px-4 md:px-12 h-full mt-10 md:mt-20">
      <div className="absolute left-8 md:left-1/2 md:top-0  h-full w-1 bg-primary-blue transform -translate-x-1/2 z-0" />

      <Timeline
        title="Work Experience"
        items={[
          {
            // icon: "</>",
            title: "Frontend Developer",
            subtitle: "Edudesks – Oct 2024 - Present",
            description:
              "Building a responsive education management platform using React and TypeScript, optimizing performance and implementing real-time form validation and data visualization components.",
          },
          {
            // icon: "</>",
            title: "Frontend Developer",
            subtitle: "SickleAid – May 2024 - Present",
            description:
              "Developing a full-stack mobile app for individuals on the sickle cell spectrum with React Native and NestJS.",
          },
        ]}
      />
      <Timeline
        title="Education"
        items={[
          {
            // icon: <RiGraduationCapLine />,
            title: `Postgraduate Diploma (PGD)
             - Software Engineering`,
            subtitle: "Nile University of Nigeria – 2024 - Present",
            description: "",
          },
          {
            // icon: <RiGraduationCapLine />,
            title: "Frontend Development Diploma",
            subtitle: "AltSchool Africa – 2023 - 2024",
            description: "",
          },
          {
            // icon: <RiGraduationCapLine />,
            title: "Product Design (UI/UX) Diploma",
            subtitle: "Tech4Dev Women Techsters – 2023",
            description: "",
          },
        ]}
      />
    </div>
  );
};

export default WorkExperience;
