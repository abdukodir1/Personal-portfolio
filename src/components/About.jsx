import profilePic from "../assets/profile_photo.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  

  const rightVar = {
    hidden: { opacity: 1, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap lg:justify-start gap-4 lg:gap-15"
      >
        <img
          src={profilePic}
          alt="profilePic"
          width={250}
          height={200}
          className="mb-6 rounded-2xl"
        />

        <div className="flex flex-col">
          <h2
            variants={rightVar}
            className="mb-2 font-semibold text-2xl py-3  "
          >
            Experience and career:
          </h2>
          <ul>
            <li>
              <p>Web Developer</p>
            </li>
            <li>
              <p>Front-End developer</p>
            </li>
            <li>
              <p>Full-Stack developer</p>
            </li>
          </ul>
          <h2 className="mb-2 font-semibold text-2xl py-3 ">Graduation:</h2>
          <ul>
            <li>
              <a
                className="underline italic font-semibold text-blue-500"
                href="https://www.kw.ac.kr/en/"
              >
                Kwangwoon university
              </a>
              <p className="italic font-semibold">
                Bachelor of Science 2019~2024
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-start lg:justify-start">
        <h2 className="mb-2 font-semibold py-3">
          I'm ABDUKODIR. You may call me Alex, too
        </h2>
        <p className="lg:w-2/3 font-normal">{ABOUT_TEXT}</p>
        <h2 className="mb-2 font-semibold py-3 text-2xl ">Background</h2>
        <p className="lg:w-2/3 font-normal">
          I was born in Uzbekistan and graduated from college with a degree in
          finance. My interest in the Korean language and culture, along with my
          growing passion for technology, led me to pursue a Bachelor's degree
          in Computer Engineering. This path has enabled me to merge my cultural
          curiosity with my passion for exploring new technological frontiers.
        </p>
        <h2 className="mb-2 font-semibold py-3 text-2xl ">Certificates</h2>
        <ul className="list-disc lg:w-2/3">
          <li className=" list-none pb-2 font-bold">Udemy</li>
          <li>
            The Complete Full-Stack Web Development Bootcame (by Dr. Angela Yu)
          </li>
          <li>Complete Web Developer (by Andrei Neagoie)</li>
          <li>
            Node.js, Express, MongoDB & More: The Complete Bootcamp (by Jonas
            Schmedtmann)
          </li>
          <li className="list-none py-2 font-bold">Korean language skills</li>
          <li>TOPIK 4 (2022~)</li>
          <li>KIIP 4 (2024)</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
