import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import picBlog from "../public/assets/projectPic/picBlog.png";
import Head from "next/head";
const photoProjet = () => {
  return (
    <>
      <Head>
        <title>Projet Marvel Quizz</title>
        <meta name="description" content="Projet Marvel Quizz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={picBlog}
          projetTitle="Blog Photo"
          projetStructure="Site vitrine pour mettre en valeur le travail personnel d'un amaateur de photographie  "
          projetTech=" Next JS/Tailwind"
          projetLink="https://next-photo-blog-fk4b6vsjj-animasso.vercel.app/"
          projetGit="https://github.com/Animasso/Next-photoBlog.git"
          techList={["Next JS", "Tailwind"]}
        />
      </div>
    </>
  );
};

export default photoProjet;
