import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Main.module.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <header>
          <div className="sansFont mt-6">
            <span
              id="text"
              className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text font-[Ralway] "
            >
              <Typewriter words={["Animasso Sidibé"]} typeSpeed={120} />
            </span>
          </div>
          <motion.div
            className={styles.pseudo}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeIn",
            }}
          >
            <h1 className=" py-4 text-[#2e71b8]">Développeur FrontEnd</h1>
            <p className="py-4 text-gray-700 max-w-[70%] m-auto">
              Développeur web passionné d&apos;informatique J&apos;aime créer et
              découvrir de nouvelles technologies et méthodes dans le but de
              construire de belles interfaces.
            </p>
          </motion.div>
          <motion.div
            rotate={{ x: 360 }}
            className=" flex items-center justify-between max-w-[330px] m-auto py-4 "
          >
            <Link
              href="https://www.linkedin.com/in/animasso-sidib%C3%A9/"
              target="_blank"
              className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://github.com/Animasso"
              target="_blank"
              className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 scal"
            >
              <FaGithub />
            </Link>
          </motion.div>
        </header>
      </div>
    </div>
  );
}
