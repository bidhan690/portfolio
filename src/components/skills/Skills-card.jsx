import Image from "next/image";

export default function SkillsCard({ name, src, alt }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-slate-900">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={src} alt={alt} width={64} height={64} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="dark:text-[#F6F7F9]/90">{name}</h3>
        </div>
      </div>
    </div>
  );
}
