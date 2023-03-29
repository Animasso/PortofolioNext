import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import grapPic from "../public/assets/projectPic/grap.png";

function sportSee() {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={grapPic}
        projetTitle="SportSee"
        projetStructure=" Création d'une landing page qui va permettre à l'utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées grace à plusieurs graphique dynamique réalisé avec Rechart.
         Récupération des données auprès de l'API ;
      Création et affichage des graphiques ;
      Séparation logique du code dans des composants réutilisables."
        projetTech=" React.js/Css/Javascript"
        projetLink="https://sport-see-eg49.vercel.app/"
        projetGit="https://github.com/Animasso/SportSee"
        techList={["React", "Recharts", "Axios", "JSDoc"]}
      />
    </div>
  );
}

export default sportSee;
