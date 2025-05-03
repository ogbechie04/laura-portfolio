import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  return (
     <div className="w-full flex flex-col gap-4 md:gap-8 items-center justify-center h-screen max-h-[18.75rem] md:max-h-[31.25rem] text-white">
            <h1 className="text-3xl md:text-7xl lg:text-[7.1875rem]">
              Laura Ogbechie
            </h1>
            <p className="text-xl md:text-4xl lg:text-5xl text-accent">Frontend Developer</p>

            {/* -------- social media links -------- */}
            <div className="flex gap-7">
              {/* -------- github -------- */}
              <a
                href="https://github.com/ogbechie04"
                className="text-lg md:text-[28px]"
                target="_blank"
                aria-label='Github Profile'
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              {/* -------- x/twitter -------- */}
              <a
                href="https://x.com/ogbechie_04"
                className="text-lg md:text-[28px]"
                target="_blank"
                aria-label='X Profile'
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              {/* -------- instagram -------- */}
              <a
                href="https://www.instagram.com/ogbechie_04/"
                className="text-lg md:text-[28px]"
                target="_blank"
                aria-label='Instagram Profile'
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              {/* -------- linkedIn -------- */}
              <a
                href="https://www.linkedin.com/in/laura-ogbechie-80474b150/"
                className="text-lg md:text-[28px]"
                target="_blank"
                aria-label='LinkedIn Profile'
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
  )
}

export default HeroSection