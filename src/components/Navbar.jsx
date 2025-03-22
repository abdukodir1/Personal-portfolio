
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  ///
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <>
      {isHomePage ? (
        <nav className="flex items-center justify-end py-4 mb-2 bg-stone-950/35 rounded-2xl">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex gap-3 items-center justify-center text-2xl lg:text-3xl my-5 lg:gap-5 px-4"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
            >
              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
            >
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4)}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaSquareXTwitter />
              </a>
            </motion.div>
          </motion.div>
        </nav>
      ) : (
        <nav className=" py-5 bg-stone-950/35 rounded-2xl">
          <div className="hidden sm:flex justify-between items-center lg:text-xl my-4 px-4">
            <a href="/" aria-label="HOME">
              Home
            </a>

            <div className="flex items-center lg:gap-3 gap-2 pr-2 font-medium">
              <NavLink
                className={({ isActive }) => (isActive ? "text-stone-500" : "")}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-stone-500" : "")}
                to="/technologies"
              >
                Skills
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-stone-500" : "")}
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-stone-500" : "")}
                to="/압두코디르의_프론트엔드_이력서.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "text-stone-500" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="sm:hidden flex justify-between items-center my-2 px-4">
            <div className="flex flex-shrink-0 items-center ">
              <a href="/" aria-label="HOME">
                Home
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white, focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <RiCloseFill className="w-6 h-6" />
              ) : (
                <RiMenu3Fill className="w-6 h-6" />
              )}
            </button>
          </div>
          {menuOpen && (
            <div className="sm:hidden p-2 px-4 bg-stone-950/35  rounded-xl flex flex-col space-y-2 max-w-6xl mx-auto font-medium">
              <NavLink onClick={handleLinkClick} to="/about">
                About
              </NavLink>
              <NavLink onClick={handleLinkClick} to="/technologies">
                Skills
              </NavLink>
              <NavLink onClick={handleLinkClick} to="/projects">
                Projects
              </NavLink>

              <NavLink
                onClick={handleLinkClick}
                to="/압두코디르의_프론트엔드_이력서.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </NavLink>
              <NavLink onClick={handleLinkClick} to="/contact">
                Contact
              </NavLink>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

export default Navbar;
