import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();

  return (
    <footer className="w-full my-20">
      <p className="w-full text-white text-center text-sm md:text-base flex items-center justify-center">
        Copyright Laura Ogbechie {year}&nbsp;
        <span className="inline">
          <AiOutlineCopyright />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
