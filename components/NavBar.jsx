import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logoAsid from "../public/assets/logoAsid.png";
import { motion } from "framer-motion";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };

  const [rotate, setRotate] = useState(false);
  return (
    <div
      className={
        shadow
          ? "fixed w-full shadow-2xl z-[100] md:opacity-80 bg-white"
          : "fixed w-full z-[100] bg-white"
      }
    >
      <div className=" flex justify-between items-center w-full h-full 2xl:px-16">
        <Image src={logoAsid} alt="logo" width="125" height="50" />
        <div>
          <ul className="hidden md:flex mr-4">
            <Link onClick={() => setRotate(!rotate)} href="/">
              <motion.li
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ type: "tween", duration: 1 }}
                className="ml-10 text-sm uppercase hover:border-b border-blue-900"
              >
                Home
              </motion.li>
            </Link>
            <Link href="/#about">
              <motion.li
                onClick={() => setRotate(!rotate)}
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ type: "tween", duration: 1 }}
                className="ml-10 text-sm uppercase hover:border-b  border-blue-900"
              >
                A propos
              </motion.li>
            </Link>
            <Link href="/#techno">
              <motion.li
                onClick={() => setRotate(!rotate)}
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ type: "tween", duration: 1 }}
                className="ml-10 text-sm uppercase hover:border-b  border-blue-900"
              >
                Techno
              </motion.li>
            </Link>
            <Link href="/#projets">
              <motion.li
                onClick={() => setRotate(!rotate)}
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ type: "tween", duration: 1 }}
                className="ml-10 text-sm uppercase hover:border-b  border-blue-900"
              >
                Projets
              </motion.li>
            </Link>
            <Link href="/#contact">
              <motion.li
                onClick={() => setRotate(!rotate)}
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ type: "tween", duration: 1 }}
                className="ml-10 text-sm uppercase hover:border-b  border-blue-900"
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          <div className="md:hidden mr-4" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/60" : " "}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logoAsid.png"
                alt="logo"
                width="85"
                height="35"
              />
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-500 my-4">
              <p className=" w-[85%] md:[90%] py-4 font-semibold">
                Développeur Frontend{" "}
              </p>
            </div>
          </div>
          <div>
            <ul className=" py-4 flex flex-col font-semibold">
              <Link href="/">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm uppercase hover:text-base ease-in-out duration-500"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4  text-sm uppercase hover:text-base ease-in-out duration-500"
                >
                  A propos
                </li>
              </Link>
              <Link href="/#techno">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm uppercase hover:text-base ease-in-out duration-500"
                >
                  Techno
                </li>
              </Link>
              <Link href="/#projets">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4  text-sm uppercase hover:text-base ease-in-out duration-500"
                >
                  Projet
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4  text-sm uppercase hover:text-base ease-in-out duration-500"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className=" uppercase tracking-widest text-green-700/70 font-semibold">
                OpenToWork
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:[80%]">
                <Link
                  href="https://www.linkedin.com/in/animasso-sidib%C3%A9/"
                  className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/Animasso"
                  className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href=""
                  className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
                >
                  <BsFillPersonLinesFill />
                </Link>
                <Link
                  href=""
                  className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
                >
                  <AiOutlineMail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
