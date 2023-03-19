import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, src, name, url }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={src}
        alt={title}
        width={600}
        height={200}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-white text-2xl text-center tracking-wider">
          {title}
        </h3>
        <p className="text-white text-center pt-2">{name}</p>
        <Link href={url}>
          <p className="text-center text-xl py-3 px-5 rounded-lg font-bold bg-white text-gray-700">
            More Info!
          </p>
        </Link>
      </div>
    </div>
  );
}
