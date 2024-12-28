import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import learnWebPic from "../public/assets/projectPic/learnweb.png";
import Head from "next/head";
const learnWeb = () => {
  return (
    <>
      <Head>
        <title>Learn From Home Web</title>
        <meta name="description" content="Learn From Home Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={learnWebPic}
          projetTitle="Learn From Home Website"
          projetStructure="Site d'une platforme de mentorat à distance "
          projetTech=" React JS/Tailwind/TypeScript/Framer motion"
          projetLink="https://learn-from-home.vercel.app/"
          projetGit="https://github.com/Animasso/learnFromHome"
          techList={["React JS", "TypeScript", "Tailwind", "Framer motion"]}
        />
      </div>
    </>
  );
};

export default learnWeb;
