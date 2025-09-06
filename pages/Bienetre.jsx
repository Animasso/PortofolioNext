import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import BienetrePic from "../public/assets/projectPic/BienetrePic.png";
import Head from "next/head";
const Bienetre = () => {
  return (
    <>
      <Head>
        <title>Bien Etre Pour Tous</title>
        <meta name="description" content="Boutique de produits comestique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={BienetrePic}
          projetTitle="Bien Etre Pour Tous"
          projetStructure="Site pour une boutique de produits comestique "
          projetTech=" Wordpress/Woocommerce/Elementor"
          projetLink="https://cynical-statue.localsite.io/"
          techList={["Wordpress", "Woocommerce", "Elementor"]}
          code=" username:ocelot Password:projet007"
        />
      </div>
    </>
  );
};

export default Bienetre;
