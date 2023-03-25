import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import marvelQuizz from "../public/assets/projectPic/marvelQuizz.png";
const marvelProject = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[40vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/80 z-10 "></div>
        <Image
          className="absolute top-0 left-0 z-1 "
          fill={true}
          style={{ objectFit: "cover", paddingBottom: "56,25%" }}
          src={marvelQuizz}
          alt="marvelPic"
        />
        <div className=" absolute top-[70%] max-w-[1280px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2"> Marvel Quizz</h2>
          <h3> React.js/FireBase/Tailwind</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Project</p>
          <h2>Marvel Quizz</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            cumque magni quibusdam dolorum officiis saepe aspernatur minima
            exercitationem, maxime laudantium similique dolor? Nesciunt
            accusamus facere recusandae ab neque temporibus, ipsam veniam
            consectetur! Aspernatur non expedita quod perferendis! Libero
            delectus saepe suscipit possimus porro quia repudiandae, ducimus
            numquam sunt reiciendis earum iste rem ex laborum magni velit,
            accusamus modi blanditiis voluptatibus! Pariatur incidunt recusandae
            nam sunt veritatis exercitationem nostrum excepturi! Culpa ipsa illo
            blanditiis officia numquam, voluptas cupiditate odit ab veritatis
            dolor, nostrum doloremque tempora magni, sequi officiis ea
            asperiores earum! Eos quibusdam vitae voluptas ipsum voluptatem
            aliquam quo magni molestiae?
          </p>
          <Link
            href="https://marvelprojet-56a90.firebaseapp.com/"
            target="_blank"
          >
            <button className=" px-8 py-2 mt-4 mr-8">Site</button>
          </Link>
          <Link href="https://github.com/Animasso/marvel-quizz" target="_blank">
            <button className=" px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className=" text-center font-bold pb-2">Technologies</p>
            <div>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Javascript
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Tailwind
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Firebase
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Cloud FireStore
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Marvel API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projets">
          <p className=" underline cursor-pointer"> Projets</p>
        </Link>
      </div>
    </div>
  );
};
export default marvelProject;
