import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import argentPic from "../public/assets/projectPic/bank.png";

const argentBank = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={argentPic}
        projetTitle="Argent Bank"
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
        projetTech=" React.js/Redux Toolkit/
        Javascript/Swagger"
        projetLink="https://marvelprojet-56a90.firebaseapp.com/"
        projetGit="https://github.com/Animasso/Animasso_Sidibe_13_23102022"
      />
    </div>
  );
};

export default argentBank;
