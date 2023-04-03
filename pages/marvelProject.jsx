import ProjectDetail from "@/components/ProjectDetail";
import marvelQuizz from "../public/assets/projectPic/marvelQuizz.png";
import Head from "next/head";
const marvelProject = () => {
  return (
    <>
      <Head>
        <title>Projet Marvel Quizz</title>
        <meta name="description" content="Projet Marvel Quizz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={marvelQuizz}
          projetTitle="Marvel Quizz"
          projetStructure="Création d'un site où l'utilisateur a la possibilité de s'inscrire et de faire des quiz de différents niveaux sur l'univers Marvel et ses héros. Une fiche descriptive des héros présent dans chaque réponse et disponible. Utilisation de React de l'API Marvel , Cloud FireStore en base de données ainsi que FireBase pour l'hébergement du backend "
          projetTech=" React.js/FireBase/Tailwind"
          projetLink="https://marvelprojet-56a90.firebaseapp.com/"
          projetGit="https://github.com/Animasso/marvel-quizz"
          techList={[
            "Javascript",
            "React",
            "FireBase",
            "Marvel API",
            "Cloud FireStore",
          ]}
        />
      </div>
    </>
  );
};
export default marvelProject;
