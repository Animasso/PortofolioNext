import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import fishEyePic from "../public/assets/projectPic/fisheye.png";

const fishEye = () => {
  return (
    <div className=" w-full">
      <ProjectDetail
        projetImage={fishEyePic}
        projetTitle="FishEye"
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
        projetTech=" Javascript"
        projetLink="https://animasso.github.io/AnimassoSidibe_6_070320202/"
        projetGit="https://github.com/Animasso/AnimassoSidibe_6_070320202"
        techList={["Javascript"]}
      />
    </div>
  );
};

export default fishEye;
