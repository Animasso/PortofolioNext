import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import RestoPic from "../public/assets/projectPic/Comme-au restaurant.png";
import Head from "next/head";
const CommeAuResto = () => {
  return (
    <>
      <Head>
        <title>Comme Au Restaurant</title>
        <meta name="description" content="Order Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={RestoPic}
          projetTitle="Comme Au Restaurant"
          projetStructure="Site de commande de plats et de reservation de traiteurs"
          projetTech=" React JS/Tailwind/Framer motion/Swipper"
          projetLink="https://comme-au-restaurant.vercel.app/"
          projetGit="https://github.com/Animasso/comme-au-restaurant"
          techList={["React JS", "Tailwind", "Framer motion", "Swipper"]}
        />
      </div>
    </>
  );
};

export default CommeAuResto;
