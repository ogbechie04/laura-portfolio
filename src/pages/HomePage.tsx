import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkExperience from "../components/WorkExperience";
import SkillsSection from "../components/SkillsSection";
import WorksDisplaySection from "../components/WorksDisplaySection";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen h-full w-full">
      {/* -------- header/hero section -------- */}
      <header>
        <HeroSection />
      </header>
      <main>
        {/* -------- about me -------- */}
        <AboutSection />
        {/* -------- work experience -------- */}
        <WorkExperience />
        {/* -------- skills */}
        <SkillsSection />
        {/* -------- work display -------- */}
        <WorksDisplaySection />
        {/* -------- contact me -------- */}
        <ContactMe />
      </main>
        {/* -------- footer -------- */}
        <Footer />
    </div>
  );
};

export default HomePage;
