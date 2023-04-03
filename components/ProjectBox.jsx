import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const ProjectBox = ({ pic, projectName, stack, projectUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: "easeIn",
      }}
      className=" relative md:min md:max-[300px] flex  min-h-[150px] justify-center lg:min-h-[310px] h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-white to- bg-slate-300"
    >
      <Image
        className="  rounded-xl group-hover:opacity-10 "
        src={pic}
        alt={projectName}
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl text-blue-600/95 tracking-widest">
          {projectName}
        </h3>
        <p className=" pb-4 pt-2 text-blue-600/95 text-center">{stack}</p>
        <Link href={`${projectUrl}`}>
          {" "}
          <p className=" text-center py-3 rounded-lg bg-blue-500  text-gray-700 font-bold text-lg cursor-pointer">
            Plus d&apos;info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};
export default ProjectBox;
