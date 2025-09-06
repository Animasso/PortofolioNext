import React from "react";
import BoxSkills from "./BoxSkills";
import htmlpic from "../public/assets/skills/html.png";
import csspic from "../public/assets/skills/css.png";
import javascriptpic from "../public/assets/skills/javascript.png";
import reactpic from "../public/assets/skills/react.png";
import typeScriptPic from "../public/assets/skills/typeScript.png";
import githubpic from "../public/assets/skills/github1.png";
import tailwindpic from "../public/assets/skills/tailwind.png";
import nextpic from "../public/assets/skills/nextjs.png";
import jestpic from "../public/assets/skills/jest.png";
import reduxpic from "../public/assets/skills/redux.png";
import mongopic from "../public/assets/skills/mongo.png";
import firebasepic from "../public/assets/skills/firebase.png";
import visualpic from "../public/assets/skills/visual.png";
import swaggerpic from "../public/assets/skills/picswagger.png";
import figmapic from "../public/assets/skills/figma.png";
import java from "../public/assets/skills/java.png";
import wordpress from "../public/assets/skills/wordpress.jpg";
const Skills = () => {
  return (
    <div id="techno" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-blue-400 uppercase tracking-widest font-bold ">
          Techno
        </p>
        <h2 className="py-4">Mes compétences</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BoxSkills logoSkill={htmlpic} stack="Html" />
          <BoxSkills logoSkill={csspic} stack="Css" />
          <BoxSkills logoSkill={githubpic} stack="Github" />
          <BoxSkills logoSkill={javascriptpic} stack="Javascript" />
          <BoxSkills logoSkill={typeScriptPic} stack="TypeScript" />
          <BoxSkills logoSkill={reactpic} stack="React" />
          <BoxSkills logoSkill={tailwindpic} stack="Tailwind" />
          <BoxSkills logoSkill={nextpic} stack="Next" />
          <BoxSkills logoSkill={wordpress} stack="Wordpress" />
          <BoxSkills logoSkill={java} stack="Java" />
          <BoxSkills logoSkill={jestpic} stack="Jest" />
          <BoxSkills logoSkill={reduxpic} stack="Redux" />
          <BoxSkills logoSkill={mongopic} stack="Mongo" />
          <BoxSkills logoSkill={firebasepic} stack="Firebase" />
          <BoxSkills logoSkill={visualpic} stack="Visual Studio" />
          <BoxSkills logoSkill={swaggerpic} stack="Swagger" />
          <BoxSkills logoSkill={figmapic} stack="Figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
