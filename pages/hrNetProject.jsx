import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import hrPic from "../public/assets/projectPic/hr.png";
import Head from "next/head";
const hrNetProject = () => {
  return (
    <>
      <Head>
        <title>Projet Hrnet</title>
        <meta name="description" content="Projet Hrnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" w-full">
        <ProjectDetail
          projetImage={hrPic}
          projetTitle="HrNet"
          projetStructure="Refonte d'une ancienne en React application qui utilisé jQuery côté front end, ce qui entraîné des bugs considérables et une augmentation des plaintes en interne. 
        Ajoute d'un système de gestion d'état (la version précedente utilisé un stockage local).
        Création d'un plugin d'une fenetre modal npm "
          projetTech=" React.js/Javascript/Tailwind/Material Ui/Création d'une librairie npm/React-table"
          projetLink="https://animasso-sidibe-14-112022-2lgzq5twy-animasso.vercel.app/"
          projetGit="https://github.com/Animasso/Animasso_sidibe_14_112022"
          techList={["Javascript", "React", "Redux", "tailwind", "react-table"]}
        />
      </div>
    </>
  );
};

export default hrNetProject;
