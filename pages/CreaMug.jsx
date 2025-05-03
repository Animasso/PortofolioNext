import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import CreaMugPic from "../public/assets/projectPic/CreaMugPic.png";
import Head from "next/head";
const CreaMug = () => {
  return (
    <>
      <Head>
        <title>CreaMug</title>
        <meta name="description" content="Mug Custom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={CreaMugPic}
          projetTitle="CreaMug"
          projetStructure="Site de personnalisation de mug"
          projetTech=" React JS/Tailwind/Framer motion"
          projetLink="https://creamug.vercel.app/"
          projetGit="https://github.com/Animasso/mugStore"
          techList={["React JS", "Tailwind", "Framer motion"]}
        />
      </div>
    </>
  );
};

export default CreaMug;
