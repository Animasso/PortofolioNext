import ProjectDetail from "@/components/ProjectDetail";
import learnPic from "../public/assets/projectPic/learn.png";
import Head from "next/head";
function learnHome(props) {
  return (
    <>
      <Head>
        <title>Projet Learn@Home</title>
        <meta name="description" content="Projet Learn@Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={learnPic}
          projetTitle="Learn@Home"
          projetStructure="Création d'une maquette avec Figma pour un site de soutien scolaire, mise en place de diagrammes de cas d'usage pour chacune des fonctionnalités majeures de chaque page (connexion, chat, calendrier, gestionnaire de tâches, tableau de bord).
          Rédaction de user stories avec critères d'acceptation pour chacune des fonctionnalités,utilisation de Kanban découpant le projet, de manière macro (détails techniques exclus) en blocs de fonctionnalités et sous-fonctionnalités pour le développement."
          projetTech=" Figma/Notion/Création de User Stories/Diagrammes de cas d'usage."
          projetLink="https://www.figma.com/file/xZQYu7fA1aiQIeENJeRXDv/Learn%40Home?node-id=0-1&t=3kXH3PXc3hTp7cG7-0"
          projetGit=""
          techList={[
            "Figma",
            "Notion",
            "User Stories",
            "Diagramme de cas d'usage",
          ]}
        />
      </div>
    </>
  );
}

export default learnHome;
