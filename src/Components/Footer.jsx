import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row items-center justify-center fixed bottom-0 left-0 z-20 w-full p-4 bg-transparent shadow-sm md:p-10 gap-2 md:gap-5">
        {/* Copyright Section */}
        <div className="text-[11px] md:text-[16px] text-gray-500 sm:text-center dark:text-gray-400">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <a
            href="https://www.linkedin.com/in/nnadozie-chukwuemerie-clara-b65273274/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="text-blue-500 text-[15px] md:text-[24px]" />
          </a>
          <a
            href="https://github.com/Brielle28"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-800 text-[15px] md:text-[24px]" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;


