import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="  w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" text-blue-400 uppercase tracking-widest font-bold">
            A Propos
          </p>
          <h2 className="py-4"> Qui suis-je ?</h2>
          <p className="py-2 text-gray-600">
            Je suis titulaire d'un diplôme bac +3/4 Développeur concepteur
            logiciel aimant le processus de création j'aime créer de belles
            interfaces qui seront facilement compréhensibles et utilisables par
            un utilisateur. Ce qui me plait dans le Frontend c'est qui il est
            possible de construire tout ce qui est imaginable en maitrisant les
            bonnes technologies. Dans ce domaine où l'apprentissage est constant
            la veille technologique permet de garder un oeil sur les mises à
            jour et les nouvelles avancées je me suis lancé dans une carrière
            dans le web car ce métier laisse place l'imagination partir de zéro
            à une page dynamique,j'aime ce processus de création Je suis de
            nature curieuse, j'aime apprendre et relever de nouveaux challenges.
            Dans un domaine où les technologies évoluent rapidement et apportent
            toujours plus de puissance, de performance, d'innovation. Mes
            différentes expériences professionnelles m'ont permis de la
            communication qui est essentielle à un bon travail en équipe
          </p>
          <p className="py-2 cursor-pointer text-gray-600 underline">
            Mes Projets
          </p>
        </div>
        <div className=" h-[300px] self-center shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300">
          <img
            className=" max-w-md:mt-8 rounded-xl"
            src="../assets/ordi.jpg"
            alt="ordi pic"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
