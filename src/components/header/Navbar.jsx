import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import HeaderLinks, { SmallHeaderLinks, SmallIcons } from "./HeaderUtil";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { CiLight, CiDark } from "react-icons/ci";

const imageVariants = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const darkVariants = {
  hidden: {
    y: "-100px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Navbar = () => {
  const [navBarToggle, setNavBarToggle] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(!darkMode);
    localStorage.setItem("dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    if (
      router.asPath === "/" ||
      router.asPath === "/#contact" ||
      router.asPath === "/#about" ||
      router.asPath === "/#projects" ||
      router.asPath === "/#skills" ||
      !darkMode
    ) {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    } else {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    }
    darkMode && setNavBg("#23272F");
  }, [router, darkMode]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ background: `${navBg}` }}
      className={
        navShadow
          ? "fixed w-full h-20 shadow-xl z-[100] "
          : "fixed w-full h-20  z-[100]  "
      }
    >
      <div className="flex  justify-between items-center h-full w-full px-2 xl:px-16">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link href="/">
            <Image
              src="/assets/bn.png"
              alt="Bidhan Niroula"
              width={125}
              height={50}
              priority
            />
          </Link>
        </motion.div>

        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center "
          >
            <HeaderLinks href="/" name="Home" />
            <HeaderLinks href="/#about" name="about" />
            <HeaderLinks href="/#skills" name="skills" />
            <HeaderLinks href="/#projects" name="Projects" />
            <HeaderLinks href="/#contact" name="Contact" />

            {darkMode ? (
              <motion.div
                key="light-icon"
                variants={darkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="ml-8 cursor-pointer"
                onClick={toggleDarkMode}
              >
                <CiLight size={30} color={darkMode ? "white" : ""} />
              </motion.div>
            ) : (
              <motion.div
                key="dark-icon"
                variants={darkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="ml-8 cursor-pointer"
                onClick={toggleDarkMode}
              >
                <CiDark size={30} />
              </motion.div>
            )}
          </ul>

          <div className="md:hidden pr-2 flex m-2 items-center">
            {darkMode ? (
              <motion.div
                key="light-icon"
                variants={darkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mr-12 cursor-pointer"
                onClick={toggleDarkMode}
              >
                <CiLight size={30} color={darkMode ? "white" : ""} />
              </motion.div>
            ) : (
              <motion.div
                key="dark-icon"
                variants={darkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mr-12 cursor-pointer"
                onClick={toggleDarkMode}
              >
                <CiDark size={30} />
              </motion.div>
            )}
            <div>
              <AiOutlineMenu
                size={25}
                color={darkMode ? "white" : ""}
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          navBarToggle
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navBarToggle
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#23272F] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300 "
          }
        >
          <div>
            <div className="flex justify-between items-center  overflow-y-hidden ">
              <Image
                src="/assets/bn.png"
                alt="bidhan niroula"
                width={87}
                height={35}
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-red-500"
                onClick={() => setNavBarToggle(!navBarToggle)}
              >
                <AiOutlineClose color={darkMode ? "white" : ""} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-[#F6F7F9]">
                Let&apos;s build something legendary together{" "}
              </p>
            </div>
          </div>
          <div className="h py-4 flex flex-col ">
            <ul className="">
              <SmallHeaderLinks
                href="/"
                name="Home"
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
              <SmallHeaderLinks
                href="/#about"
                name="About"
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
              <SmallHeaderLinks
                href="/#skills"
                name="Skills"
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
              <SmallHeaderLinks
                href="/#projects"
                name="Projects"
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
              <SmallHeaderLinks
                href="/#contact"
                name="Contact"
                onClick={() => setNavBarToggle(!navBarToggle)}
              />
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]  ">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <SmallIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
