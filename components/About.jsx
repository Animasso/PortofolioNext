import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="  w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" text-blue-400 uppercase tracking-widest font-bold">
            A Propos
          </p>
          <h2 className="py-4"> Qui suis-je ?</h2>
          <p className="py-2 text-gray-600">
            Titulaire d&apos;un diplôme bac +3/4 Développeur concepteur
            logiciel, j&apos;aime le processus de création qui est lié au
            Front-end ,créer des applications qui seront facilement
            compréhensibles et manipulables par un utilisateur. Ce qui me plaît
            dans le Frontend c&apos;est la possibilité de matérialiser
            différentes interfaces grâce la maîtrise d&apos;outils comme
            JavaScript ou encore React. Je me suis lancé dans une carrière dans
            le web car ce métier laisse place à l&apos;imagination partir de
            zéro à une page dynamique où l&apos;utilisateur peut se connecter
            tout en aillant un plaisir visuel est une navigation intuitive. Je
            suis de nature curieuse ce qui me permet d&apos;avoir des centres
            d&apos;intérêt très différents, j&apos;aime apprendre et relever de
            nouveaux challenges. Dans un domaine où les technologies évoluent
            rapidement et apportent toujours plus de puissance et
            d&apos;innovation la veille technologique que j&apos;ai mis en place
            me permet de garder un oeil sur les mises à jour et les nouvelles
            avancées. Mes différentes expériences professionnelles m&apos;ont
            permis acquérir une bonne communication et de la rigueur ce qui est
            essentiel pour un bon travail en équipe lors de la création
            d&apos;un projet en entreprise.
          </p>
        </div>
        <div className=" w-auto h-[300px] self-center shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center hover:scale-105 ease-in-out duration-300">
          <img
            className=" max-w-md:mt-8 rounded-xl h-[300px] "
            src="../assets/ordi.jpg"
            alt="ordi pic"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
