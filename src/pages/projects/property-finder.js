import Image from "next/image";
import Link from "next/link";
import Techlist from "@/components/dprojects/techlist";

const techs = ["React", "Tailwind", "Firebase", "Zillow Api", "Google Api"];

export default function PropertyFinder() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10  " />
        <Image
          className="absolute z-1 object-cover"
          fill
          src="/assets/projects/property.jpg"
          alt="property-finder"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10 p-2 ">
          <h2>Property Finder</h2>
          <h3>React JS/Firebase/Tailwind </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="uppercase text-[#]">Project</p>
          <h2 className=""> Overview</h2>
          <p className="">
            {" "}
            Culpa esse ut duis culpa in. Labore do ullamco ipsum eu aute cillum
            cupidatat elit exercitation. Tempor tempor cupidatat adipisicing
            exercitation ullamco exercitation do pariatur sint sunt ex mollit et
            dolore. Exercitation incididunt laborum quis non id aliqua nostrud
            culpa commodo in in ea tempor reprehenderit. Culpa pariatur
            consectetur eiusmod mollit adipisicing. Aliquip magna duis est est.
            Nisi aliqua non sit sit eu elit tempor dolor enim fugiat cillum.
            Enim sunt Lorem cillum est sit dolore nulla sit quis minim Lorem
            ipsum culpa. Aute aute qui aute quis voluptate excepteur tempor
            labore eiusmod et. Et magna dolor nulla cupidatat eu qui quis mollit
            sit eiusmod in. Sit Lorem adipisicing irure cillum irure amet labore
            officia dolor pariatur proident.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
          <button className="px-8 py-2 mt-4  ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2"> Technologies</p>
            <Techlist name={techs} />
          </div>
        </div>
        <Link href="/#projects" className="underline">
          {" "}
          Back
        </Link>
      </div>
    </div>
  );
}