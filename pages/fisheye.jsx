import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import fishEyePic from "../public/assets/projectPic/picfisheye.png";
import Head from "next/head";
const fishEye = () => {
  return (
    <>
      <Head>
        <title>Projet Fisheye</title>
        <meta name="description" content="Projet Fisheye" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={fishEyePic}
          projetTitle="FishEye"
          projetStructure="L'objectif est de construire un prototype fonctionnel d'un nouveau site web à partir d'une maquette que nous pourrons présenter à FishEye.
                            Le back-end ayant déjà été intégré l'implémentation du frontend fut réalisé en HTLM CSS et Javascript "
          projetTech=" Javascript"
          projetLink=""
          projetGit="https://github.com/Animasso/AnimassoSidibe_6_070320202"
          techList={["Javascript"]}
        />
      </div>
    </>
  );
};

export default fishEye;
