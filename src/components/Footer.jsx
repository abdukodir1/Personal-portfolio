import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
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

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      {isHomePage ? (
        <footer className="flex items-center justify-center  bg-stone-950/50 rounded-2xl">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex  gap-3 my-5 px-4"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
            >
              <RiReactjsLine className="text-4xl text-cyan-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
            >
              <RiJavascriptFill className="text-4xl text-yellow-400" />
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
            >
              <TbBrandNextjs className="text-4xl" />
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2)}
            >
              <FaNodeJs className="text-4xl text-green-600" />
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
            >
              <SiMongodb className="text-4xl text-green-400" />
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4)}
            >
              <BiLogoPostgresql className="text-4xl text-sky-600" />
            </motion.div>
          </motion.div>
        </footer>
      ) : (
        <footer className="lg:font-semibold flex items-center justify-start py-6 bg-stone-950/50 rounded-2xl px-4">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
          >
            Copyright: {year}
          </motion.h2>
        </footer>
      )}
    </>
  );
}

export default Footer;
