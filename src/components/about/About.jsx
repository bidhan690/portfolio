import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: {
    x: "-250px",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: {
    y: "200px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
      ease: "easeInOut",
    },
  },
};

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <motion.div
          className="col-span-2 md:block"
          variants={aboutVariants}
          initial="hidden"
          whileInView="visible"
        >
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am?</h2>
          <p className="py-2 text-gray-600">
            {"// I am not your normal developer"}
          </p>
          <p className="py-2 text-gray-600">
            I am a Next.js developer with 2 years of experience in building
            full-stack web applications. My skills include HTML, CSS,
            JavaScript, React, Next.js and Flutter. I have a passion for
            programming and love to create high-quality web applications that
            meet the needs of my clients. In my free time, I enjoy indulging in
            my favorite dish - chicken chilly.
          </p>
          <Link href='/#projects' className="py-2 text-gray-600 underline cursor-pointer">
            Checkout some of my latest projects!
          </Link>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          className="w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in"
        >
          <Image
            src="/assets/pp.png"
            priority
            alt="bidhan profile"
            width={300}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
