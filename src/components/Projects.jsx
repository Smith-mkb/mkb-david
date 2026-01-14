import { PROJECTS } from "../constant/index.js";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projets
      </motion.h2>
      <div className="">
        {PROJECTS &&
          PROJECTS.map((project, key) => (
            <div className="mb-8 flex flex-wrap lg:justify-center glass rounded-2xl p-6 glass-hover group" key={key}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-center lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="rounded-xl mb-4 group-hover:scale-105 transition"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold text-xl">{project.title}</h3>
                <p className="mb-4 text-neutral-400 text-justify" dangerouslySetInnerHTML={{ __html:project.description}}/>
                <div className="flex flex-wrap justify-start items-center">
                  {project.technologies &&
                    project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </motion.div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
