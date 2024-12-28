import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import BilledPic from "../public/assets/projectPic/picbilled.png";
import Head from "next/head";
const billed = () => {
  return (
    <>
      <Head>
        <title>Projet Billed</title>
        <meta name="description" content="Projet Billed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={BilledPic}
          projetTitle="Billed"
          projetStructure="Le but de ce projet était de fiabiliser et d'améliorer le parcours employé de ce site web avec l'aide d'un rapport avec les bugs identifiés (Kanban Notion) . Mise en place de test avec JEST ainsi que la rédaction d'un de plan de tests End-to-End du site . "
          projetTech=" Jest / Debogger Chrome/ Rédaction d'un Plan test End-to-End"
          projetLink=""
          projetGit="https://github.com/Animasso/AnimassoSidibe_9_16072022"
          techList={["Jest", "Debogger Chrome", "Plan test End-to-End"]}
        />
      </div>
    </>
  );
};

export default billed;
