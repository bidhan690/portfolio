import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Techlist from "@/components/dprojects/techlist";
import { motion } from "framer-motion";
import { getData, getOneData } from "@/helpers/mongodb";

const textVariants = {
  hidden: { y: "200px" },
  visible: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
const overviewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function DynamicProjects({ data }) {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>{data[0].projectName}</title>
        <meta name="description" content={data[0].overviewText} />
      </Head>
      <div className="w-full" exit="exit">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10  " />
          <Image
            className="absolute z-1 object-cover"
            fill
            src="/assets/projects/property.jpg"
            alt={data[0].projectName}
            priority
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10 p-2 ">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {data[0].projectName}
            </motion.h2>
            <h3>{data[0].techUsed}</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
          <motion.div
            variants={overviewVariants}
            initial="hidden"
            animate="visible"
            className="col-span-4"
          >
            <p className="uppercase text-[#]">Project</p>
            <h2 className=""> Overview</h2>
            <p className="">{data[0].overviewText}</p>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="px-8 py-2 mt-4 mr-8 "
              onClick={() => window.open(data[0].demoLink)}
            >
              Demo
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="px-8 py-2 mt-4  "
              onClick={() => window.open(data[0].codeLink)}
            >
              Code
            </motion.button>
          </motion.div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 ">
            <div className="p-2">
              <p className="text-center font-bold pb-2"> Technologies</p>
              <Techlist name={data[0].techArray} />
            </div>
          </div>
          <Link href="/#projects" className="underline">
            {" "}
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { pid } = params;

  const data = await getOneData("projects", pid);

  return { props: { data }, revalidate: 300 };
}

export async function getStaticPaths() {
  const data = await getData("projects");

  // Generate the paths for all the projects
  const paths = data.map((project) => ({
    params: { pid: project._id },
  }));

  return { paths, fallback: false };
}
