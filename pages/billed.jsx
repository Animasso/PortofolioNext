import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import BilledPic from "../public/assets/projectPic/billed.png";

const billed = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={BilledPic}
        projetTitle="Billed"
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
        projetTech=" Jest / Debogger Chrome"
        projetLink="https://animasso-sidibe-9-16072022.vercel.app/"
        projetGit="https://github.com/Animasso/AnimassoSidibe_9_16072022"
        techList={["Jest"]}
      />
    </div>
  );
};

export default billed;
