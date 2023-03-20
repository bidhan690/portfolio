import ProjectCard from "./Project-card";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: {
    x: "-100px",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      type: "spring",

      stiffness: 100,
      duration: 1,
      staggerChildren: 2,
    },
  },
};

const cardVariants = {
  hidden: {
    x: "-100px",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export default function Projects({ items }) {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <motion.h2
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          className="py-2 text-gray-600 dark:text-[#F6F7F9]/90"
        >
          What I&apos;ve built{" "}
        </motion.h2>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {items &&
            items.map((itemss) => {
              return (
                <ProjectCard
                  key={itemss._id}
                  url={`/projects/${itemss._id}`}
                  title={itemss.projectName}
                  name={itemss.techUsed}
                  src={itemss.imageLink}
                />
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}
