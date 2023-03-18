import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.04 * i },
  }),
};
const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function AnimatedText() {
  const name = "Bidhan";
  const words = Array.from(name);
  return (
    <motion.span variants={container} initial="hidden" animate="visible">
      {words.map((word, i) => {
        return (
          <motion.span
            variants={child}
            key={i}
            className="text-[#5651e5] mr-[2px] "
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
