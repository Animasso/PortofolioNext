import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import MoviePic from "../public/assets/projectPic/Movie.png";

import Head from "next/head";
const Movie = () => {
  return (
    <>
      <Head>
        <title> Movie search base Web</title>
        <meta name="description" content="Movie search base Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={MoviePic}
          projetTitle="Movie search base Web "
          projetStructure="Site de recherche de film fait à partirde l'Api movieBase "
          projetTech=" React JS/TypeScript/Tailwind/Api/Appwrite/Framer motion"
          projetLink="https://movie-display-five.vercel.app/"
          projetGit="https://github.com/Animasso/movieDisplay"
          techList={[
            "React JS",
            "TypeScript",
            "Tailwind",
            "Framer motion",
            "Api",
            "Appwrite",
          ]}
        />
      </div>
    </>
  );
};

export default Movie;
