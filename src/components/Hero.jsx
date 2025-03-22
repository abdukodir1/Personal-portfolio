import { useState } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  const menuVariants = {
    hidden: { opacity: 0, y: 0, x: 0, rotate: -50, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 120,
      x: 80,
      scale: 1,
      rotate: 50,
      transition: {
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0, x: 0, rotate: 0 },
    visible: {
      opacity: 1,
      y: 40,
      x: 5,
      rotate: -50,
      transition: { duration: 0.5 },
    },
  };

  //
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-4 lg:mb-5 mb-17">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <DotLottieReact
                src="https://lottie.host/a077c511-eb81-4952-8390-60a27b2f2799/PccG5lBZFk.lottie"
                loop
                autoplay
                className="w-[450px] h-[450px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-3 text-4xl tracking-tighter lg:text-4xl font-bold"
            >
              Welcome
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent font-medium"
            >
              {"{I'm Full-Stack Developer}"}
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white rounded-full p-4 text-sm font-bold text-stone-800 mb-12 "
              >
                More Info
              </button>

              {isOpen && (
                <motion.div
                  className="absolute bottom-8 left-5 space-y-5  p-6 font-medium lg:text-xl "
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                >
                  <motion.div variants={itemVariants}>
                    <NavLink to="/about" className="list-item">
                      About
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/technologies" className="list-item">
                      Skills
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/projects" className="list-item">
                      Projects
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink
                      to="/압두코디르의_프론트엔드_이력서.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="list-item"
                    >
                      Resume
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/contact" className="list-item">
                      Contact
                    </NavLink>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
