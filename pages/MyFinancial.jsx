import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import MyFinancialPic from "../public/assets/projectPic/MyFinancial.png";
import Head from "next/head";
const MyFinancial = () => {
  return (
    <>
      <Head>
        <title>My Fiancial Dashboard</title>
        <meta name="description" content="Fianacial DashBoard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" w-full">
        <ProjectDetail
          projetImage={MyFinancialPic}
          projetTitle="My Financial Dashboard"
          projetStructure=" Site pour garder un oeil sur les dépenses quotidienne"
          projetTech=" React JS/Tailwind/Framer motion/Firebase/Rechart"
          projetLink="https://dash-financial-gabz.vercel.app/"
          projetGit="https://github.com/Animasso/dashFinancial"
          techList={[
            "React JS",
            "Tailwind",
            "Framer motion",
            "Firebase",
            "Rechart",
          ]}
        />
      </div>
    </>
  );
};

export default MyFinancial;
