import Image from "next/image";

import projectPic from "../public/assets/projectPic/marvelQuizz.png";
const Projects = () => {
  return (
    <div className=" w-full">
      <div className=" max-w-[1240px] mx-auto p-2 py-16">
        <p className=" text-blue-400 uppercase tracking-widest font-bold">
          Projets
        </p>
        <h2 className="py-4">Mes réalisations</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-emerald-200 to- bg-emerald-600">
            <Image
              className="  rounded-xl group-hover:opacity-10"
              src={projectPic}
              alt="marvelPic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
