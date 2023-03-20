import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const navLinkVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",

    transition: {
      type: "spring",

      stiffness: 200,
    },
  },
};

export default function HeaderLinks({ name, href }) {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      variants={navLinkVariants}
      whileHover="hover"
      href={href}
      className="ml-10 text-sm uppercase hover:border-b dark:text-white"
    >
      {name}
    </MotionLink>
  );
}

export function SmallHeaderLinks({ name, href, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Link href={href} onClick={handleClick}>
      <li className="py-4 text-sm uppercase dark:text-[#F6F7F9]">{name}</li>
    </Link>
  );
}

export function Icons() {
  const iconsVariants = {
    hover: {
      scale: 1.2,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-6 cursor-grab  "
        onClick={() =>
          window.open("https://www.linkedin.com/in/bidhan-niroula-78722822a/")
        }
      >
        <FaLinkedinIn className="dark:text-[#F6F7F9]" />
      </motion.div>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-6 cursor-grab  "
        onClick={() => window.open("https://www.github.com/bidhan690/")}
      >
        <FaGithub className="dark:text-[#F6F7F9]" />
      </motion.div>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-6 cursor-grab  "
        onClick={() =>
          window.open("mailto:88bidhanniroula@gmail.com", "_blank")
        }
      >
        <AiOutlineMail className="dark:text-[#F6F7F9]" />
      </motion.div>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4   rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-6  cursor-grab  "
        onClick={() => window.open("tel:+9779820359083", "_blank")}
      >
        <BsFillPersonLinesFill className=" dark:text-[#F6F7F9]" />
      </motion.div>
    </>
  );
}

export function SmallIcons() {
  return (
    <>
      <div
        className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
        onClick={() =>
          window.open("https://www.linkedin.com/in/bidhan-niroula-78722822a/")
        }
      >
        <FaLinkedinIn className="dark:text-[#F6F7F9]" />
      </div>
      <div
        className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
        onClick={() => window.open("https://www.github.com/bidhan690/")}
      >
        <FaGithub className="dark:text-[#F6F7F9]" />
      </div>
      <div
        className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
        onClick={() =>
          window.open("mailto:88bidhanniroula@gmail.com", "_blank")
        }
      >
        <AiOutlineMail className="dark:text-[#F6F7F9]" />
      </div>
      <div
        className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#fff]/20 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
        onClick={() => window.open("tel:+9779820359083", "_blank")}
      >
        <BsFillPersonLinesFill className="dark:text-[#F6F7F9]" />
      </div>
    </>
  );
}

export function ContactIcons() {
  const iconsVariants = {
    hover: {
      scale: 1.2,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-grab"
        onClick={() =>
          window.open("https://www.facebook.com/newbidhan.niroula/")
        }
      >
        <FaFacebook className="dark:text-[#F6F7F9]" />
      </motion.div>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-grab "
        onClick={() => window.open("https://www.instagram.com/bidhan_niroula/")}
      >
        <FaInstagram className="dark:text-[#F6F7F9]" />
      </motion.div>
      <motion.div
        variants={iconsVariants}
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.4}
        className="mx-4 rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-grab "
        onClick={() =>
          window.open("mailto:88bidhanniroula@gmail.com", "_blank")
        }
      >
        <AiOutlineMail className="dark:text-[#F6F7F9]" />
      </motion.div>
    </>
  );
}
