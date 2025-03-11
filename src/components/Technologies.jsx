import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills & technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-15 text-center">
        {/* Skill Card 1 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 absolute -top-9 bg-white rounded-xl px-2" />
          <div className="max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">React</h3>
            <p>
              A widely used JavaScript library for building interactive user
              interfaces, particularly for single-page applications (SPAs).
              React allows developers to create reusable components, making UI
              development more efficient and maintainable. It's used by
              companies like Facebook, Instagram, and Airbnb.
            </p>
          </div>
        </motion.div>

        {/* Skill Card 2 */}

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <RiJavascriptFill className="text-7xl absolute -top-9 bg-white rounded-xl px-2 text-yellow-400" />
          <div className=" max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">JavaScript</h3>
            <p>
              The backbone of web development, JavaScript enables dynamic and
              interactive functionality on websites. It runs in browsers and
              powers both front-end and back-end applications. With frameworks
              and libraries like React, Vue, and Node.js, JavaScript has become
              an essential tool for modern developers.
            </p>
          </div>
        </motion.div>

        {/* Skill Card 3 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <TbBrandNextjs className="text-7xl absolute -top-9 bg-white rounded-xl px-2" />
          <div className=" max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">Next.js</h3>
            <p>
              A powerful React framework that enhances performance with features
              like server-side rendering (SSR), static site generation (SSG),
              and API routes. It's ideal for SEO-friendly applications,
              e-commerce platforms, and blogs. Next.js is widely adopted by
              companies like Vercel, Netflix, and GitHub.
            </p>
          </div>
        </motion.div>

        {/* Skill Card 4 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <FaNodeJs className="text-7xl absolute -top-9  bg-white rounded-xl px-2 text-green-600" />
          <div className=" max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">Node.js</h3>
            <p>
              A runtime environment that allows JavaScript to run on the server
              side. It is known for its event-driven, non-blocking architecture,
              making it perfect for handling real-time applications, APIs, and
              microservices. Many large-scale platforms, including LinkedIn,
              PayPal, and Uber, rely on Node.js.
            </p>
          </div>
        </motion.div>

        {/* Skill Card 5 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <SiMongodb className="text-7xl absolute -top-9 bg-white rounded-xl px-2 text-green-400" />
          <div className=" max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">MongoDB</h3>
            <p>
              A NoSQL database designed to store large volumes of unstructured
              data. Unlike relational databases, MongoDB uses a flexible
              document-based structure, making it an excellent choice for
              applications requiring scalability and fast data retrieval. It’s
              commonly used in modern web apps, including e-commerce and social
              media platforms.
            </p>
          </div>
        </motion.div>

        {/* Skill Card 6 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="relative w-64 h-auto min-h-64 border-1 bg-stone-950/40 border-cyan-400 rounded-xl flex flex-col items-center justify-center lg:w-1/3 p-6 shadow-lg"
        >
          <BiLogoPostgresql className="text-7xl absolute -top-9 bg-white rounded-xl px-2 text-sky-600" />
          <div className=" max-h-40 overflow-auto italic text-sm">
            <h3 className="font-semibold">PostgreSQL</h3>
            <p>
              A powerful, open-source relational database known for its
              robustness, scalability, and support for advanced SQL queries.
              PostgreSQL is widely used in enterprise applications, financial
              systems, and analytics platforms, where data integrity and complex
              operations are critical. And scalable web applications that
              enhance user experience and business efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
