import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="py-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, i) => {
          return (
            <div key={i} className="flex flex-wrap lg:justify-start">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 mb-10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className=" rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:ml-6 lg:w-2/4 mb-4"
              >
                <h2 className="mb-2 font-semibold text-2xl">{project.title}</h2>
                <p className="mb-2 text-stone-400">{project.description}</p>
                {project.technologies.map((tech, i) => {
                  return (
                    <span
                      className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={i}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
