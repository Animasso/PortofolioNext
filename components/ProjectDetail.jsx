import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechLines from "@/components/TechLines";
import { motion } from "framer-motion";
const ProjectDetail = ({
  projetImage,
  projetTitle,
  projetStructure,
  projetTech,
  projetLink,
  projetGit,
  techList,
  code,
}) => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[40vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/80 z-10 "></div>
        <Image
          className="absolute top-0 left-0 z-1 "
          fill={true}
          style={{ objectFit: "cover", paddingBottom: "56,25%" }}
          src={projetImage}
          alt="marvelPic"
        />
        <div className=" absolute top-[70%] max-w-[1280px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2"> {projetTitle}</h2>
          <h3>{projetTech} </h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Project</p>
          <h2>{projetTitle}</h2>
          <p>{projetStructure}</p>
          {projetLink && (
            <Link href={projetLink} target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Site</button>
            </Link>
          )}
          {projetGit && (
            <Link href={projetGit} target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </Link>
          )}
        </div>
        <div
          className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4"
          // data-aos="fade-left"
        >
          <div className="p-2">
            <p className=" text-center font-bold pb-2">Technologies</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeIn",
              }}
            >
              {techList.map((oneTech, i) => {
                return <TechLines key={i} tech={oneTech} />;
              })}
            </motion.div>
          </div>
        </div>
        {code && (
          <div className=" col-span-5">
            <p className=" font-bold py-2 px-2 rounded-md text-white bg-black w-fit">
              {code}
            </p>
          </div>
        )}
        <Link href="/#projets">
          <p className=" underline cursor-pointer"> Projets</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
