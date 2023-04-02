import ProjectDetail from "@/components/ProjectDetail";
import learnPic from "../public/assets/projectPic/learn.png";
import Head from "next/head";
function learnHome(props) {
  return (
    <>
      <Head>
        <title>Projet Learn@Home</title>
        <meta name="description" content="Projet Learn@Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={learnPic}
          projetTitle="Learn@Home"
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
          projetTech=" Figma/Notion/Création de User Stories/Diagrammes de cas d’usage."
          projetLink="https://www.figma.com/file/xZQYu7fA1aiQIeENJeRXDv/Learn%40Home?node-id=0-1&t=3kXH3PXc3hTp7cG7-0"
          projetGit=""
          techList={["Figma", "Notion"]}
        />
      </div>
    </>
  );
}

export default learnHome;
