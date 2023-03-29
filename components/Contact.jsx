import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";
import contactpic from "../public/assets/contact.png";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  const [state, handleSubmit] = useForm("meqwlnno");
  if (state.succeeded) {
    return <p>Formulaire envoyé !!</p>;
  }
  return (
    <div id="contact" className=" w-full lg:h-screen ">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-blue-400 uppercase tracking-widest font-bold ">
          Contact
        </p>
        <h2 className=" py-4">Prendre Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className=" rounded-xl hover:scale-105 ease-in-out duration-300"
                  src={contactpic}
                  alt="contact"
                  width="400"
                  height="300"
                />
              </div>
              <div>
                <h2 className=" py-2">Animasso Sidibé</h2>
                <p>Développeur Front-end</p>
                <p className="py-4">Disponible dès maintenant </p>
              </div>
              <div>
                <p className=" uppercase pt-8 text-center text-lg font-semibold">
                  Liens{" "}
                </p>
              </div>
              <div className=" flex item-center justify-between py-4">
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
                  className=" rounded-full hover:rounded-2xl transition shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 "
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:pt-4 ">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label htmlFor="nom" className=" uppercase text-sm py-2">
                      Nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                    />
                    <ValidationError
                      prefix="nom"
                      field="nom"
                      errors={state.errors}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="numero" className=" uppercase text-sm py-2">
                      Numéro de télephone
                    </label>
                    <input
                      id="numero"
                      name="numero"
                      type="text"
                      className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label htmlFor="email" className=" uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label htmlFor="sujet" className=" uppercase text-sm py-2">
                    Sujet
                  </label>
                  <input
                    id="sujet"
                    name="sujet"
                    type="text"
                    className=" border-2 rounded-lg p-3 flex border-gray-300 shadow-lg"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label htmlFor="message" className=" uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className=" border-2 rounded-lg p-3 border-gray-300 shadow-lg"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" w-full p-4 mt-4 shadow-xl shadow-gray-400  rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white  hover:scale-105 ease-in-out duration-300 "
                >
                  Envoyer
                </button>
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
