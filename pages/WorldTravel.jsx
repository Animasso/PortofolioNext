import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import travelPic from "../public/assets/projectPic/travel.png";
import Head from "next/head";
const WorldTravel = () => {
  return (
    <>
      <Head>
        <title>World travel</title>
        <meta name="description" content="Travel website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={travelPic}
          projetTitle="Travel website"
          projetStructure="Site de presentation et de reservation de destination touristique "
          projetTech=" React JS/Tailwind/TypeScript/Framer motion/Swipper"
          projetLink="https://world-travel-psi.vercel.app/"
          projetGit="https://github.com/Animasso/world-travel"
          techList={[
            "React JS",
            "TypeScript",
            "Tailwind",
            "Framer motion",
            "Swipper",
          ]}
        />
      </div>
    </>
  );
};

export default WorldTravel;
