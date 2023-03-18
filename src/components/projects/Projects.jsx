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

export default function Projects() {
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
          className="py-2 text-gray-600"
        >
          What I&apos;ve built{" "}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            url="/projects/property-finder"
            title="Property Finder"
            name="React JS"
            src="/assets/projects/property.jpg"
          />
          <ProjectCard
            url="/projects/netflix"
            title="Netflix"
            name="Next JS"
            src="/assets/projects/netflix.jpg"
          />
          <ProjectCard
            url="/projects/crypto"
            title="Crypto App"
            name="Next JS"
            src="/assets/projects/crypto.jpg"
          />
          <ProjectCard
            url="/projects/twitch"
            title="Twitch"
            name="Next JS"
            src="/assets/projects/twitch.jpg"
          />
        </div>
      </div>
    </div>
  );
}
