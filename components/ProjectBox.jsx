import Image from "next/image";
import Link from "next/link";
const ProjectBox = ({ pic, projectName, stack, projectUrl }) => {
  return (
    <div className=" relative flex  justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-emerald-200 to- bg-emerald-600">
      <Image
        className="  rounded-xl group-hover:opacity-10 object-fill"
        src={pic}
        alt={projectName}
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl text-white tracking-widest">{projectName}</h3>
        <p className=" pb-4 pt-2 text-white text-center">{stack}</p>
        <Link href={`${projectUrl}`}>
          {" "}
          <p className=" text-center py-3 rounded-lg bg-white  text-gray-700 font-bold text-lg cursor-pointer">
            Plus d'info
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectBox;
