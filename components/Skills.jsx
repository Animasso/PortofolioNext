import React from "react";
import BoxSkills from "./BoxSkills";

const Skills = () => {
  return (
    <div id="techno" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-blue-400 uppercase tracking-widest font-bold ">
          Techno
        </p>
        <h2 className="py-4">Mes compétences</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BoxSkills
            logoSkill="/../public/assets/skills/html.png"
            stack="Html"
          />
          <BoxSkills logoSkill="/../public/assets/skills/css.png" stack="Css" />
          <BoxSkills
            logoSkill="/../public/assets/skills/github1.png"
            stack="Github"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/javascript.png"
            stack="Javascript"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/react.png"
            stack="React"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/tailwind.png"
            stack="Tailwind"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/nextjs.png"
            stack="Next"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/jest.png"
            stack="Jest"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/redux.png"
            stack="Redux"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/mongo.png"
            stack="Mongo"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/firebase.png"
            stack="Firebase"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/visual.png"
            stack="Visual Studio"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/Swagger.png"
            stack="Swagger"
          />
          <BoxSkills
            logoSkill="/../public/assets/skills/figma.png"
            stack="Figma"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
