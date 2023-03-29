import marvelPic from "../public/assets/projectPic/marvelQuizz.png";
import graphPic from "../public/assets/projectPic/grap.png";
import hrPic from "../public/assets/projectPic/hr.png";
import bankPic from "../public/assets/projectPic/bank.png";
import learnPic from "../public/assets/projectPic/learn.png";
import fisheyePic from "../public/assets/projectPic/Fisheye.png";
import KasaPic from "../public/assets/projectPic/Kasa.png";
import BilledPic from "../public/assets/projectPic/Billed.png";

import ProjectBox from "./ProjectBox";
graphPic;
const Projects = () => {
  return (
    <div id="projets" className=" w-full">
      <div className=" max-w-[1240px] mx-auto p-2 py-16">
        <p className=" text-blue-400 uppercase tracking-widest font-bold">
          Projets
        </p>
        <h2 className="py-4">Mes réalisations</h2>
        <div className=" grid md:grid-cols-3 gap-8">
          <ProjectBox
            pic={marvelPic}
            projectName="Marvel Quizz"
            stack="React js"
            projectUrl="/marvelProject"
            // projectUrl="https://marvelprojet-56a90.firebaseapp.com/"
          />
          <ProjectBox
            pic={hrPic}
            projectName="Hrnet"
            stack="React js"
            projectUrl="/hrNetProject"
          />
          <ProjectBox
            pic={bankPic}
            projectName="Argent Bank"
            stack="React js"
            projectUrl="/argentBank"
          />
          <ProjectBox
            pic={learnPic}
            projectName="Learn@Home"
            stack="Figma"
            projectUrl="/learnHome"
          />
          <ProjectBox
            pic={graphPic}
            projectName="Sport See"
            stack="React js"
            projectUrl="/sportSee"
          />
          <ProjectBox
            pic={fisheyePic}
            projectName="Fisheye"
            stack="React js"
            projectUrl="/fisheye"
          />
          <ProjectBox
            pic={KasaPic}
            projectName="Kasa"
            stack="React js"
            projectUrl="/kasa"
          />
          <ProjectBox
            pic={BilledPic}
            projectName="Billed"
            stack="Jest "
            projectUrl="/billed"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
