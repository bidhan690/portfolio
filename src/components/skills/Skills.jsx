import SkillsCard from "./Skills-card";
import { motion } from "framer-motion";

const skillsVariants = {
  hidden: {
    x: "-250px",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      ease: "easeInOut",
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};

const skillsCardVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <motion.p
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          className="text-xl tracking-widest uppercase text-[#5651e5] mt-20 "
        >
          Skills
        </motion.p>
        <h2 className="py-4">What Can I Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard name="HTML" src="/assets/skills/html.png" alt="Html" />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard name="CSS" src="/assets/skills/css.png" alt="Css" />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="JavaScript"
              src="/assets/skills/javascript.png"
              alt="Js"
            />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="React"
              src="/assets/skills/react.png"
              alt="react"
            />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="Tailwind"
              src="/assets/skills/tailwind.png"
              alt="Tailwind"
            />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="Mongo DB"
              src="/assets/skills/mongo.png"
              alt="firebase"
            />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="Github"
              src="/assets/skills/github1.png"
              alt="github"
            />
          </motion.div>
          <motion.div
            variants={skillsCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillsCard
              name="Next JS"
              src="/assets/skills/nextjs.png"
              alt="nextjs"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
