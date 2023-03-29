import ProjectDetail from "@/components/ProjectDetail";
import marvelQuizz from "../public/assets/projectPic/marvelQuizz.png";

const marvelProject = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={marvelQuizz}
        projetTitle="Marvel Quizz"
        projetStructure="Création d'un site où l'utilisateur à la possibilté de s'inscrire et de faire des quizz de différent niveau sur l'univers Marvel et ses héros.
        Une fiche descriptive des heros présent dans chaque réponse et disponible.
        Utilisation de React de l'API Marvel ,Cloud FireStore en base de donnée ainsi que FireBase pour l'hébergement du backend "
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
  );
};
export default marvelProject;
