import { Icons } from "../header/HeaderUtil";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const h1Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 7,
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.08,
    transition: {
      type: "spring",

      stiffness: 300,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 7,
      stiffness: 100,
    },
  },
};

const pVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <div className=" w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center ">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="uppercase text-sm tracking-widest text-gray-600"
        >
          Let&apos;s build something together
        </motion.p>
        <h1 className="py-4 text-gray-700">
          Hi, I&apos;m <AnimatedText />
        </h1>

        <motion.h1
          variants={h1Variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="py-4 text-gray-700"
        >
          A Full-Stack Web Developer
        </motion.h1>
        <motion.p
          variants={pVariants}
          initial="hidden"
          whileInView="visible"
          className="py-4 text-gray-600 max-w-[70%] "
        >
          As a Next.js developer, I specialize in building full-stack web
          applications using the popular React-based framework. With my
          expertise in Next.js and its features, I am able to create
          high-quality web applications that meet the needs of my clients.
        </motion.p>
        <div className="flex items-center justify-between max-w-[330px] py-4">
          <Icons />
        </div>
      </div>
    </div>
  );
}
