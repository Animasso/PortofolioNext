import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import kasaPic from "../public/assets/projectPic/pickasa.png";
import Head from "next/head";
const kasa = () => {
  return (
    <>
      <Head>
        <title>Projet Kasa</title>
        <meta name="description" content="Projet Kasa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={kasaPic}
          projetTitle="Kasa"
          projetStructure="Création de location d'appartements d'un site avec React avec différents composants,développement des routes avec React Router (landing page,gallerie individuelle avec les photos de l'appartement) "
          projetTech=" React / Javascript"
          projetLink="https://animasso-sidibe-11-25082022.vercel.app/"
          projetGit="https://github.com/Animasso/Animasso_Sidibe_11_25082022"
          techList={["React", "Axios"]}
        />
      </div>
    </>
  );
};

export default kasa;
