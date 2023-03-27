import ProjectDetail from "@/components/ProjectDetail";
import marvelQuizz from "../public/assets/projectPic/marvelQuizz.png";

const marvelProject = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={marvelQuizz}
        projetTitle="Marvel Quizz"
        projetStructure=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        cumque magni quibusdam dolorum officiis saepe aspernatur minima
        exercitationem, maxime laudantium similique dolor? Nesciunt
        accusamus facere recusandae ab neque temporibus, ipsam veniam
        consectetur! Aspernatur non expedita quod perferendis! Libero
        delectus saepe suscipit possimus porro quia repudiandae, ducimus
        numquam sunt reiciendis earum iste rem ex laborum magni velit,
        accusamus modi blanditiis voluptatibus! Pariatur incidunt recusandae
        nam sunt veritatis exercitationem nostrum excepturi! Culpa ipsa illo
        blanditiis officia numquam, voluptas cupiditate odit ab veritatis
        dolor, nostrum doloremque tempora magni, sequi officiis ea
        asperiores earum! Eos quibusdam vitae voluptas ipsum voluptatem
        aliquam quo magni molestiae?"
        projetTech=" React.js/FireBase/Tailwind"
        projetLink="https://marvelprojet-56a90.firebaseapp.com/"
        projetGit="https://github.com/Animasso/marvel-quizz"
        techList={["Javascript", "React", "FireBase", "Marvel API"]}
      />
    </div>
  );
};
export default marvelProject;
