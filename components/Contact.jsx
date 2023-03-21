import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Link from "next/link";
const Contact = () => {
  return (
    <div className=" w-full lg:h-screen ">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-blue-400 uppercase tracking-widest font-bold ">
          Contact
        </p>
        <h2 className=" py-4">Prendre Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className=" rounded-xl hover:scale-105 ease-in-out duration-300"
                  src="../assets/contact.png"
                  alt="contact"
                />
              </div>
              <div>
                <h2 className=" py-2">Animasso Sidibé</h2>
                <p>Développeur Front-end</p>
                <p className="py-4">Disponible dès maintenant </p>
              </div>
              <div>
                <p className=" uppercase pt-8">Connect with me</p>
              </div>
              <div className=" flex item-center justify-between py-4">
                <Link
                  href="https://www.linkedin.com/in/animasso-sidib%C3%A9/"
                  className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <div className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 ">
                  <FaGithub />
                </div>
                <div className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300">
                  <BsFillPersonLinesFill />
                </div>
                <div className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:pt-4 ">
            <div className="p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Nom</label>
                    <input
                      type="text"
                      className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">
                      Numéro de télephone
                    </label>
                    <input
                      type="text"
                      className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Sujet</label>
                  <input
                    type="text"
                    className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300 shadow-lg"
                    rows="10"
                  ></textarea>
                </div>
                <button className=" w-full p-4 mt-4 ">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 ">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
