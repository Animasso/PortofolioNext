import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import MarmitePic from "../public/assets/projectPic/MarmitePic.png";
import Head from "next/head";
const Marmite = () => {
  return (
    <>
      <Head>
        <title>La Marmite Africaine</title>
        <meta name="description" content="Restaurant africain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={MarmitePic}
          projetTitle="La Marmite Africaine"
          projetStructure="Site pour un restaurant africain "
          projetTech=" React JS/Tailwind/Framer motion/Swipper"
          projetLink="https://marmite-africaine.vercel.app/"
          projetGit="https://github.com/Animasso/marmite-africaine"
          techList={["React JS", "Tailwind", "Framer motion", "Swipper"]}
        />
      </div>
    </>
  );
};

export default Marmite;
