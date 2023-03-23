import { getData } from "@/helpers/mongodb";
import ProjectCard from "@/components/projects/Project-card";
import { motion } from "framer-motion";
import Head from "next/head";
const textVariants = {
  hidden: {
    y: "-100px",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 1,
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
      stiffness: 200,
      duration: 1,
    },
  },
};

export default function Projects({ projects }) {
  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
    
    <div className=" w-full h-screen text-center  ">
      <div className="relative top-[150px] mb-6">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="dark:text-white"
        >
          All Projects
        </motion.h1>
      </div>
      <div className=" flex  justify-center items-center">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative top-[200px]  grid grid-cols-1 md:grid-cols-2"
        >
          {projects &&
            projects.map((itemss) => {
              return (
                <div key={itemss._id} className="m-6 lg:w-[500px]">
                  <ProjectCard
                    url={`/projects/${itemss._id}`}
                    title={itemss.projectName}
                    name={itemss.techUsed}
                    src={itemss.imageLink}
                  />
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getData("projects");

  return {
    props: {
      projects,
    },
    revalidate: 300,
  };
}
