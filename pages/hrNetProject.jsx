import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import hrPic from "../public/assets/projectPic/hr.png";
import TechLines from "@/components/TechLines";
const hrNetProject = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={hrPic}
        projetTitle="HrNet"
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
        projetTech=" React.js/Javascript/Tailwind/Material Ui/Création d'une librairie npm/React-table"
        projetLink="https://marvelprojet-56a90.firebaseapp.com/"
        projetGit="https://github.com/Animasso/Animasso_sidibe_14_112022"
        techList={["Javascript", "React", "tailwind", "react-table"]}
      />
    </div>
  );
};

export default hrNetProject;
