import React from "react";
import { FaGithub } from "react-icons/fa";

const works = [
  {
    image: "./projects/altGreenery.png",
    title: "AltGreenery",
    description:
      "A responsive website for showcasing locally sourced agricultural produce. Built with React, TypeScript, and Tailwind CSS, this project highlights my ability to create clean, modern UIs while focusing on sustainability and user engagement.",
    stack: ["react", "typescript", "tailwind"],
    liveLink: "https://www.altgreenery.com/",
    repoLink: "https://github.com/ogbechie04/altGreenery",
  },
  {
    image: "./projects/enter-web-app-2.png",
    title: "Entertainment Web App",
    description:
      "A movie browsing application styled after popular streaming platforms. Includes search functionality, trending categories, and bookmarking features. Developed using React, Firebase, and JavaScript to demonstrate real-time data integration and dynamic UI rendering.",
    stack: ["js", "firebase", "react"],
    liveLink: "https://entertainment-web-app-sand.vercel.app/",
    repoLink: "https://github.com/ogbechie04/entertainment-web-app",
  },
  {
    image: "./projects/carefinder.png",
    title: "Carefinder",
    description:
      "A hospital directory web app for discovering top-rated hospitals nearby. Key features include search filters, hospital detail pages, and user authentication. Focuses on usability and responsive design.",
    stack: ["react", "typescript", "firebase"],
    liveLink: "https://carefinder-one.vercel.app",
    repoLink: "https://github.com/ogbechie04/carefinder",
  },
  {
    image: "./projects/pay4me-2.png",
    title: "Pay4Me",
    description:
      "A payment interface designed for international education-related transactions. Includes a clean layout, call-to-action sections, and responsive design elements. It showcases UI component styling and layout structure.",
    stack: ["react", "js", "chakra-ui"],
    liveLink: "https://pay4me-intern-pulse.vercel.app/",
    repoLink: "https://github.com/ogbechie04/pay4me-internPulse",
  },
  {
    image: "./projects/edudesks.png",
    title: "Edudesks",
    description:
      "Landing page for a school management platform that supports student admissions, payment processing, and dashboard functionality.",
    stack: ["react", "typescript", "tailwind"],
    liveLink: "https://laura-edudesk.vercel.app",
    repoLink: "https://github.com/ogbechie04/laura-edudesk",
  },
  {
    image: "./projects/age-calculator.png",
    title: "Age Calculator",
    description:
      "A simple responsive web tool for calculating a user’s age in years, months, and days based on selected birth date input. Built with HTML, CSS, and JavaScript, demonstrating basic form handling and date logic implementation.",
    stack: ["html", "css", "js"],
    liveLink: "https://age-calculator-ten-rho.vercel.app",
    repoLink: "https://github.com/ogbechie04/age-calculator",
  },
];

const WorksDisplaySection = () => {
  return (
    <section className="w-full flex flex-col flex-wrap gap-5 md:gap-7 items-center px-4 lg:px-[4.8125rem] h-full mt-10 md:mt-20">
      <h2 className="text-center font-bold text-2xl md:text-3xl text-white mb-10">
        &lt;Works /&gt;
      </h2>

      {/* -------- cards container -------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {works.map((work, index) => (
          // {/* -------- card -------- */}
          <div
            key={index}
            className="h-full px-4 shadow-2xl pt-7 pb-3 rounded-3xl flex flex-col gap-5 bg-[#000000] outline-2 outline-[#3978BD] border-[3px] border-[#E9F1F7] text-white hover:scale-105 transition duration-600 ease"
          >
            {/* -------- card image -------- */}
            <div className=" rounded-2xl">
              <img
                src={work.image}
                alt="altGreenery"
                className="w-full h-full rounded-2xl"
              />
            </div>

            {/* --------- work details -------- */}
            <div className="flex flex-col grow justify-between">
              <div>
                <h3 className="text-xl font-medium">{work.title}</h3>
                <p className="mt-5 text-base">{work.description}</p>
                {/* -------- tech stack -------- */}
                <div className="flex gap-2 flex-wrap">
                  {work.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="mt-4 text-sm py-1.5 px-4 bg-accent rounded-2xl text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* -------- live link and github -------- */}
              {/* -------- live link -------- */}
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={work.liveLink}
                  target="_blank"
                  className="hover:text-accent underline"
                  rel="noopener noreferrer"
                  aria-label="View live link"
                >
                  Live Link
                </a>
                {/* -------- github -------- */}
                <a
                  href={work.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View soure on Github"
                >
                  <FaGithub className="w-10 h-10 hover:text-accent" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksDisplaySection;
