import React from "react";
import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="w-full px-4 md:px-6 mt-10 md:mt-20 mx-auto flex flex-col items-center max-w-[71.875rem] gap-10">
      {/* -------- personal details section -------- */}
      <div className="flex flex-col-reverse gap-6 md:flex-row w-full justify-between">
        {/* -------- about me -------- */}
        <div>
          <p className="font-bold text-xl md:text-2xl text-primary-blue">
            &lt;About Me /&gt;
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {/* -------- full name -------- */}
            <p className="text-base  font-bold">
              Full Name:{" "}
              <span className="font-normal text-text-blue">
                Laura Ndidiamaka Ogbechie
              </span>
            </p>
            {/* -------- phone -------- */}
            <p className="text-base  font-bold">
              Phone:{" "}
              <span className="font-normal text-text-blue">
                +234 8139288244
              </span>
            </p>
            {/* -------- email -------- */}
            <p className="text-base  font-bold">
              Email:{" "}
              <span className="font-normal text-text-blue">
                ogbechielaura04@gmail.com
              </span>
            </p>
            {/* -------- address -------- */}
            <p className="text-base  font-bold">
              Address:{" "}
              <span className="font-normal text-text-blue">Lagos, Nigeria</span>
            </p>
          </div>

          <button className="mt-6 md:mt-[2.25rem] px-4 py-2.5 bg-primary-blue text-lg text-white font-bold rounded-[10px] hover:scale-110 transition duration-600 ease-in-out">
            <a href="/OGBECHIE_LAURA_SOFTWARE_ENGINEER_CV.pdf" download>
              Download CV
            </a>
          </button>
        </div>
        {/* -------- display picture -------- */}
        <div className="relative w-fit self-center md:self-auto">
          {/* -------- blue background -------- */}
          <div className="absolute w-full h-full bg-primary-blue inset-0 top-0 left-2 z-0 rounded-full"></div>
          <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden z-10">
            <img src="/profile-picture.jpeg" alt="Laura Ogbechie" />
          </div>
        </div>
      </div>
      {/* -------- in-depth details -------- */}
      <div className="w-full flex flex-col">
        <p className="font-bold text-xl md:text-2xl text-primary-blue">
          &lt;Hello There /&gt;
        </p>
        <p className="mt-5 text-base text-text-blue">
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
          <p className="text-xl font-bold">Socials: </p>
          <div className="flex gap-5 text-primary-blue items-center">
            {/* -------- github -------- */}
            <a
              href="https://github.com/ogbechie04"
              className="text-lg md:text-2xl hover:scale-150 delay-150 transition duration-600 ease-in-out"
              target="_blank"
            >
              <FaGithub />
            </a>
            {/* -------- x/twitter -------- */}
            <a
              href="https://x.com/ogbechie_04"
              className="text-lg md:text-2xl hover:scale-150 transition duration-600 ease-in-out"
              target="_blank"
            >
              <FaXTwitter />
            </a>
            {/* -------- instagram -------- */}
            <a
              href="https://www.instagram.com/ogbechie_04/"
              className="text-lg md:text-2xl hover:scale-150 transition duration-600 ease-in-out"
              target="_blank"
            >
              <FaInstagram />
            </a>
            {/* -------- linkedIn -------- */}
            <a
              href="https://www.linkedin.com/in/laura-ogbechie-80474b150/"
              className="text-lg md:text-2xl hover:scale-150 transition duration-600 ease-in-out"
              target="_blank"
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
