import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import argentPic from "../public/assets/projectPic/bank.png";

const argentBank = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={argentPic}
        projetTitle="Argent Bank"
        projetStructure=" Création d'une application web complète et responsive avec React, contenant une page d'accueil, la page de connexion et la page de profil, ces élements permettent aux clients de se connecter et de gérer leurs comptes et leur profil.
        Utilisation de Redux pour gérer le state de l'ensemble de l'application.
        Rédaction d'un document Swagger pour servir de feuille de route pour la modélisation des endpoints coté Back-end "
        projetTech=" React.js/Redux Toolkit/
        Javascript/Swagger"
        projetLink="https://marvelprojet-56a90.firebaseapp.com/"
        projetGit="https://github.com/Animasso/Animasso_Sidibe_13_23102022"
        techList={["React", "Redux", "Swagger", "Postman"]}
      />
    </div> //
  );
};

export default argentBank;
