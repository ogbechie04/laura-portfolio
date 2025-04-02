import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkExperience from "../components/WorkExperience";

const HomePage = () => {
  return (
    <div className="min-h-screen h-full w-full">
      {/* -------- header/hero section -------- */}
      <HeroSection />
      {/* -------- about me -------- */}
      <AboutSection />
      {/* -------- work experience -------- */}
      <WorkExperience />
    </div>
  );
};

export default HomePage;
