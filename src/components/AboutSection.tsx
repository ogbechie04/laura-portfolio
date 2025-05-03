import React from "react";
import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="w-full px-4 md:px-6 mt-10 md:mt-9 mx-auto flex flex-col items-center max-w-[81.25rem] gap-14">
      {/* -------- personal details section -------- */}
      <div className="flex flex-col-reverse gap-8 md:flex-row w-full justify-between">
        {/* -------- about me -------- */}
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-white">
            &lt;About Me /&gt;
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            {/* -------- full name -------- */}
            <p className="text-base text-white font-bold text-stroke">
              Full Name:{" "}
              <span className="font-normal text-white-blue text-stroke-none">
                Laura Ndidiamaka Ogbechie
              </span>
            </p>
            {/* -------- phone -------- */}
            <p className="text-base text-white font-bold text-stroke">
              Phone:{" "}
              <span className="font-normal text-white-blue text-stroke-none">
                +234 8139288244
              </span>
            </p>
            {/* -------- email -------- */}
            <p className="text-base text-white font-bold text-stroke">
              Email:{" "}
              <span className="font-normal text-white-blue text-stroke-none">
                ogbechielaura04@gmail.com
              </span>
            </p>
            {/* -------- address -------- */}
            <p className="text-base text-white font-bold text-stroke">
              Address:{" "}
              <span className="font-normal text-white-blue text-stroke-none">Lagos, Nigeria</span>
            </p>
          </div>


            <a href="/OGBECHIE_LAURA_SOFTWARE_ENGINEER_CV.pdf" download className="inline-block mt-6 md:mt-[2.25rem] px-4 py-2.5 bg-accent text-lg text-white font-bold rounded-[10px] hover:scale-110 hover:bg-accent transition duration-600 ease-in-out">
              Download CV
            </a>
        </div>
        {/* -------- display picture -------- */}
        <div className="relative w-fit self-center md:self-auto">
          {/* -------- blue background -------- */}
          <div className="absolute w-full h-full bg-accent bottom-2 inset-0 top-2 left-0 z-0 rounded-full"></div>
          <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden z-10">
            <img src="/profile-picture.jpeg" alt="Laura Ogbechie" />
          </div>
        </div>
      </div>
      {/* -------- in-depth details -------- */}
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-2xl md:text-3xl text-white">
          &lt;Hello There /&gt;
        </h2>
        <p className="mt-5 text-base text-white">
          I’m Laura, a frontend developer based in Lagos, Nigeria. I specialize
          in building responsive and user-friendly applications using React,
          TypeScript, Next.js, and styling frameworks like Tailwind CSS, Chakra
          UI, and Material UI. I’ve built a variety of projects, including
          financial dashboards, e-commerce platforms, movie apps, and healthcare
          solutions.
          <br />
          <br />
          I also have experience working with Firebase, AWS, MySQL, and NestJS
          in full-stack development. Currently, I’m pursuing a Postgraduate
          Diploma in Software Engineering to to strengthen my foundation in core
          software engineering principles.
          <br />
          <br />
          I’ve worked closely with full product teams — including designers,
          backend engineers, and product managers — to bring real-world
          applications to life, combining strong collaboration with a
          user-focused development approach.
          <br />
          <br />
          Outside of software engineering, I enjoy reading, crocheting, and
          watching movies.
        </p>

        {/* -------- socials -------- */}
        <div className="flex w-full items-center gap-2 mt-9">
          <p className="text-xl font-bold text-white">Socials: </p>
          <div className="flex gap-5 text-white items-center">
            {/* -------- github -------- */}
            <a
              href="https://github.com/ogbechie04"
              className="text-lg md:text-2xl hover:scale-150 hover:text-accent delay-150 transition duration-600 ease-in-out"
              target="_blank"
              aria-label="Github Profile"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            {/* -------- x/twitter -------- */}
            <a
              href="https://x.com/ogbechie_04"
              className="text-lg md:text-2xl hover:scale-150 hover:text-accent transition duration-600 ease-in-out"
              target="_blank"
              aria-label="X Profile"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            {/* -------- instagram -------- */}
            <a
              href="https://www.instagram.com/ogbechie_04/"
              className="text-lg md:text-2xl hover:scale-150 hover:text-accent transition duration-600 ease-in-out"
              target="_blank"
              aria-label="Instagram Profile"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* -------- linkedIn -------- */}
            <a
              href="https://www.linkedin.com/in/laura-ogbechie-80474b150/"
              className="text-lg md:text-2xl hover:scale-150 hover:text-accent transition duration-600 ease-in-out"
              target="_blank"
              aria-label="LinkedIn Profile"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
