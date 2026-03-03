import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center gap-2 p-3 text-sm bg-gradient-to-r from-[#F08090] to-[#FFC9A1]">
      <div className="flex flex-col items-center gap-4">
        <div>
          <p>Gentle Reminder : Consistency {`>`} Talent</p>
        </div>

        <div className="flex item-center gap-4">
          <span>Parisa Reza © {currentYear}</span>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
